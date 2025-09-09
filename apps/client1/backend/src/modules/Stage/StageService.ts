import prisma from "@shared/lib/prisma";
import { serviceFactory } from "@shared/utils/serviceFactory";

const service = {
  model: "stage",
  operations: ["create",  "findMany", "findUnique"],
  queryOptions: {
    select: {
      id: true,
      stageTypeId: true,
      comment: true,
      createdAt: true,
      updatedAt: true,
      type: {
        select: {
          id: true,
          model: true,
          order: true,
          value: true,
          label: true,
        },
      },
      createdBy: {
        select: {
          name: true,
        },
      },
      updatedBy: {
        select: {
          name: true,
        },
      },
    },
  },
  transformData: (result: any) => {
    result.stageName = result?.type?.label;

    delete result.type;

    return result;
  },
  beforeCreate: async (body: any, user: any, context: any) => {
    const stageOnlyFields = [
      "stageTypeId",
      "comment",
      "createdById",
      "updatedById",
    ];

    let targetModel = null;
    let targetId = null;

    for (const key in body) {
      if (key.endsWith("Id") && !stageOnlyFields.includes(key)) {
        targetModel = key.replace("Id", "");
        targetId = body[key];
        break;
      }
    }

    // Check if no model ID was provided
    if (!targetModel || !targetId) {
      throw new Error(
        "Stage must be associated with a model (leadId, projectId, etc.)"
      );
    }

    const stageData: any = {};
    const modelData: any = {};

    for (const key in body) {
      if (stageOnlyFields.includes(key) || key === `${targetModel}Id`) {
        stageData[key] = body[key];
      } else {
        modelData[key] = body[key];
      }
    }

    if (Object.keys(modelData).length > 0) {
      try {
        modelData.id = targetId;
        const serviceName = `${targetModel}Service`;
        const serviceModule = await import(
          `@/modules/${targetModel.charAt(0).toUpperCase() + targetModel.slice(1)}/${serviceName}`
        );
        await serviceModule[serviceName].update(modelData, targetId, user);
      } catch (error: any) {
        throw new Error(`Failed to update ${targetModel}: ${error.message}`);
      }
    }

    return stageData;
  },
};

export const stageService = {
  ...serviceFactory(service.model, service),
  createInitialStagesForModel: async (modelName: string, userId: string) => {
    // Validate that the model exists in Prisma
    if (!prisma[modelName]) {
      throw new Error(`Model ${modelName} does not exist`);
    }

    // Get the initial stage type (order = 1) for this model
    const initialStageType = await prisma.stageType.findFirst({
      where: {
        model: modelName,
        order: 1,
      },
    });

    if (!initialStageType) {
      throw new Error(`No initial stage type found for model ${modelName}`);
    }

    // Get all records from the target model
    const allRecords = await prisma[modelName].findMany({
      select: { id: true },
    });

    // Get existing stages for this model to filter out
    const existingStages = await prisma.stage.findMany({
      where: {
        [`${modelName}Id`]: { in: allRecords.map((r: any) => r.id) },
      },
      select: { [`${modelName}Id`]: true },
    });

    const existingIds = new Set(
      existingStages.map((s: any) => s[`${modelName}Id`])
    );

    // Filter records that don't have stages
    const recordsWithoutStages = allRecords.filter(
      (r: any) => !existingIds.has(r.id)
    );

    // Create stages one by one
    const results = {
      created: 0,
      failed: 0,
      errors: [] as any[],
    };

    for (const record of recordsWithoutStages) {
      try {
        await prisma.stage.create({
          data: {
            stageTypeId: initialStageType.id,
            [`${modelName}Id`]: record.id,
            createdById: userId,
            updatedById: userId,
            comment: `Initial stage created`,
          },
        });
        results.created++;
      } catch (error: any) {
        results.failed++;
        results.errors.push({
          recordId: record.id,
          error: error.message,
        });
      }
    }

    return results;
  },
};
