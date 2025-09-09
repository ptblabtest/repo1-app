import prisma from "@shared/lib/prisma";
import { applyRegNumber } from "@shared/utils/mutation/regNumberGenerator";
import { prepareForView } from "@shared/utils/query/prepareForView";
import { z } from "zod";

const pipelineSchema = z.object({
  regNumber: z.string().optional().nullable(),
  category: z.enum(["NEW_BUSINESS", "RENEWAL"]).optional(),
  assigneeId: z.string().optional(),
  memberIds: z.array(z.string()).optional(),
  lead: z
    .object({
      regNumber: z.string().optional(),
      name: z.string(),
      role: z.string().optional(),
      email: z.string().optional(),
      phone: z.string().optional(),
      leadSource: z.string().optional(),
      leadDate: z.any().optional(),
      leadAddress: z.string().optional(),
      description: z.string().optional(),
      prospectLocation: z.string().optional(),
      approvedDate: z.any().optional(),
      expectedCloseDate: z.any().optional(),
      clientId: z.string().optional(),
      products: z.array(z.string()).optional(),
    })
    .optional()
    .nullable(),
  opportunity: z
    .object({
      regNumber: z.string().optional().nullable(),
      title: z.string().nullable(),
      currency: z.string().optional().nullable(),
      baseAmount: z.any().optional().nullable(),
      exchangeRate: z.any().optional().nullable(),
      amount: z.any().optional().nullable(),
      expectedCloseDate: z.any().optional().nullable(),
      description: z.string().optional().nullable(),
      approvedDate: z.any().optional().nullable(),
      clientId: z.string().optional().nullable(),
      products: z.array(z.string()).optional().nullable(),
    })
    .optional()
    .nullable(),
  quote: z
    .object({
      regNumber: z.string().optional().nullable(),
      title: z.string().nullable(),
      currency: z.string().optional().nullable(),
      baseAmount: z.any().optional().nullable(),
      exchangeRate: z.any().optional().nullable(),
      amount: z.any().optional().nullable(),
      releasedDate: z.any().optional().nullable(),
      approvedDate: z.any().optional().nullable(),
      expiredDate: z.any().optional().nullable(),
      expectedCloseDate: z.any().optional().nullable(),
      description: z.string().optional().nullable(),
      clientId: z.string().optional().nullable(),
      products: z.array(z.string()).optional().nullable(),
    })
    .optional()
    .nullable(),
  contract: z
    .object({
      regNumber: z.string().optional().nullable(),
      title: z.string().nullable(),
      signedDate: z.any().optional().nullable(),
      startDate: z.any().optional().nullable(),
      endDate: z.any().optional().nullable(),
      description: z.string().optional().nullable(),
      penalty: z.boolean().optional(),
      currency: z.string().optional().nullable(),
      baseAmount: z.any().optional().nullable(),
      exchangeRate: z.any().optional().nullable(),
      amount: z.any().optional().nullable(),
      clientPicName: z.string().optional().nullable(),
      clientId: z.string().optional().nullable(),
      products: z.array(z.string()).optional().nullable(),
    })
    .optional()
    .nullable(),
  stage: z
    .object({
      stageTypeId: z.string(),
      comment: z.string().optional(),
    })
    .optional(),
  transition: z
    .object({
      action: z.enum(["PROGRESS", "REGRESS"]),
      targetStage: z.enum(["LEAD", "OPPORTUNITY", "QUOTE", "CONTRACT"]),
    })
    .optional(),
});

const PIPELINE_SELECT = {
  id: true,
  regNumber: true,
  category: true,
  leadId: true,
  opportunityId: true,
  quoteId: true,
  contractId: true,
  assigneeId: true,
  createdAt: true,
  updatedAt: true,
  createdById: true,
  updatedById: true,
  lead: {
    select: {
      id: true,
      regNumber: true,
      name: true,
      role: true,
      email: true,
      phone: true,
      leadSource: true,
      leadDate: true,
      leadAddress: true,
      description: true,
      prospectLocation: true,
      approvedDate: true,
      expectedCloseDate: true,
      createdAt: true,
      updatedAt: true,
      client: true,
      products: true,
    },
  },
  opportunity: {
    select: {
      id: true,
      regNumber: true,
      title: true,
      currency: true,
      baseAmount: true,
      exchangeRate: true,
      amount: true,
      expectedCloseDate: true,
      description: true,
      approvedDate: true,
      createdAt: true,
      updatedAt: true,
      client: true,
      products: true,
      leadId: true,
    },
  },
  quote: {
    select: {
      id: true,
      regNumber: true,
      title: true,
      currency: true,
      baseAmount: true,
      exchangeRate: true,
      amount: true,
      releasedDate: true,
      approvedDate: true,
      expiredDate: true,
      expectedCloseDate: true,
      description: true,
      createdAt: true,
      updatedAt: true,
      client: true,
      products: true,
      opportunityId: true,
    },
  },
  contract: {
    select: {
      id: true,
      regNumber: true,
      title: true,
      signedDate: true,
      startDate: true,
      endDate: true,
      description: true,
      penalty: true,
      currency: true,
      baseAmount: true,
      exchangeRate: true,
      amount: true,
      clientPicName: true,
      createdAt: true,
      updatedAt: true,
      client: true,
      products: true,
      quoteId: true,
    },
  },
  assignee: {
    select: {
      id: true,
      username: true,
    },
  },
  members: {
    select: {
      id: true,
      username: true,
    },
  },
  createdBy: {
    select: {
      id: true,
      username: true,
    },
  },
  updatedBy: {
    select: {
      id: true,
      username: true,
    },
  },
  stages: {
    select: {
      id: true,
      stageTypeId: true,
      comment: true,
      createdAt: true,
      type: {
        select: {
          id: true,
          model: true,
          order: true,
          value: true,
        },
      },
      createdBy: {
        select: {
          id: true,
          username: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc" as const,
    },
  },
};

const transformPipeline = (pipeline: any) => {
  const prepared = prepareForView(pipeline);

  const transformEntity = (entity: any) => {
    if (!entity) return entity;

    const transformed = { ...entity };

    // Transform client to clientName
    if (entity.client) {
      transformed.clientName = entity.client.name || "";
    } else {
      transformed.clientName = "";
    }
    delete transformed.client;

    // Transform products to productNames and productIds
    if (entity.products && Array.isArray(entity.products)) {
      transformed.productNames = entity.products
        .map((product: any) => product.name)
        .join(", ");
      transformed.productIds = entity.products.map(
        (product: any) => product.id
      );
    } else {
      transformed.productNames = "";
      transformed.productIds = [];
    }
    delete transformed.products;

    return transformed;
  };
  return {
    ...prepared,
    lead: transformEntity(prepared.lead),
    opportunity: transformEntity(prepared.opportunity),
    quote: transformEntity(prepared.quote),
    contract: transformEntity(prepared.contract),
    hasLead: !!prepared.leadId,
    hasOpportunity: !!prepared.opportunityId,
    hasQuote: !!prepared.quoteId,
    hasContract: !!prepared.contractId,
    leadNumber: prepared.lead?.regNumber || null,
    opportunityNumber: prepared.opportunity?.regNumber || null,
    quoteNumber: prepared.quote?.regNumber || null,
    contractNumber: prepared.contract?.regNumber || null,
  };
};

// Validation helper
const validateProgression = (existingPipeline: any, newData: any) => {
  // Check if trying to create/update contract
  if (newData.contract) {
    if (!existingPipeline?.quoteId && !newData.quote) {
      throw new Error("Contract requires a Quote to exist");
    }
  }

  // Check if trying to create/update quote
  if (newData.quote) {
    if (!existingPipeline?.opportunityId && !newData.opportunity) {
      throw new Error("Quote requires an Opportunity to exist");
    }
  }
};

export const pipelineService = {
  create: async (data: any, user: any) => {
    const validatedData = await pipelineSchema.parseAsync(data);

    validateProgression(null, validatedData);

    if (!validatedData.category) {
      throw new Error("Category is required when creating a pipeline");
    }

    const result = await prisma.$transaction(async (tx: any) => {
      // Get the first stage type for pipeline model
      const firstStageType = await tx.stageType.findFirst({
        where: {
          model: "pipeline",
          order: 1,
        },
      });

      if (!firstStageType) {
        throw new Error("No initial stage type found for pipeline");
      }

      // Handle all entities
      const leadResult = await handleLead(tx, validatedData.lead);
      const opportunityResult = await handleOpportunity(
        tx,
        validatedData.opportunity,
        undefined,
        leadResult.id
      );
      const quoteResult = await handleQuote(
        tx,
        validatedData.quote,
        undefined,
        opportunityResult.id
      );
      const contractResult = await handleContract(
        tx,
        validatedData.contract,
        undefined,
        quoteResult.id
      );

      // Build stage comment from actions
      const createdEntities = [
        leadResult.action && `Lead ${leadResult.action}`,
        opportunityResult.action && `Opportunity ${opportunityResult.action}`,
        quoteResult.action && `Quote ${quoteResult.action}`,
        contractResult.action && `Contract ${contractResult.action}`,
      ].filter(Boolean);

      const stageComment =
        createdEntities.length > 0
          ? `Pipeline created - ${createdEntities.join(", ")}`
          : "Pipeline created";

      const regNumber = await applyRegNumber(
        "pipeline",
        validatedData.regNumber
      );
      const pipeline = await tx.pipeline.create({
        data: {
          regNumber: regNumber || validatedData.regNumber,
          category: validatedData.category,
          leadId: leadResult.id,
          opportunityId: opportunityResult.id,
          quoteId: quoteResult.id,
          contractId: contractResult.id,
          assigneeId: validatedData.assigneeId,
          createdById: user.id,
          members: validatedData.memberIds
            ? {
                connect: [...new Set(validatedData.memberIds)].map(
                  (id: string) => ({ id })
                ),
              }
            : undefined,
          stages: {
            create: {
              stageTypeId:
                validatedData.stage?.stageTypeId || firstStageType.id,
              comment: validatedData.stage?.comment || stageComment,
              createdById: user.id,
            },
          },
        },
        select: PIPELINE_SELECT,
      });

      return pipeline;
    });

    return transformPipeline(result);
  },
  update: async (id: string, data: any, user: any) => {
    const validatedData = await pipelineSchema.parseAsync(data);

    const existingPipeline = await prisma.pipeline.findUnique({
      where: { id },
      select: {
        leadId: true,
        opportunityId: true,
        quoteId: true,
        contractId: true,
        lead: {
          select: {
            name: true,
            clientId: true,
            products: { select: { id: true } },
          },
        },
        opportunity: {
          select: {
            title: true,
            clientId: true,
            currency: true,
            baseAmount: true,
            exchangeRate: true,
            amount: true,
            expectedCloseDate: true,
            description: true,
            products: { select: { id: true } },
          },
        },
        quote: {
          select: {
            title: true,
            clientId: true,
            currency: true,
            baseAmount: true,
            exchangeRate: true,
            amount: true,
            expectedCloseDate: true,
            description: true,
            products: { select: { id: true } },
          },
        },
      },
    });

    if (!existingPipeline) {
      throw new Error("Pipeline not found");
    }

    // Handle transition if provided
    if (validatedData.transition) {
      const { action, targetStage } = validatedData.transition;

      return await prisma.$transaction(async (tx: any) => {
        if (action === "PROGRESS") {
          await handleProgress(
            tx,
            existingPipeline,
            targetStage,
            validatedData
          );

          // Continue with normal update flow after modifying validatedData
          validateProgression(existingPipeline, validatedData);

          // Handle all entities
          const leadResult = await handleLead(
            tx,
            validatedData.lead,
            existingPipeline.leadId
          );
          const opportunityResult = await handleOpportunity(
            tx,
            validatedData.opportunity,
            existingPipeline.opportunityId,
            leadResult.id
          );
          const quoteResult = await handleQuote(
            tx,
            validatedData.quote,
            existingPipeline.quoteId,
            opportunityResult.id
          );
          const contractResult = await handleContract(
            tx,
            validatedData.contract,
            existingPipeline.contractId,
            quoteResult.id
          );

          // Update pipeline
          const pipeline = await tx.pipeline.update({
            where: { id },
            data: {
              updatedById: user.id,
              leadId: leadResult.id,
              opportunityId: opportunityResult.id,
              quoteId: quoteResult.id,
              contractId: contractResult.id,
              // stages: validatedData.stage ? {
              //   create: {
              //     stageTypeId: validatedData.stage.stageTypeId,
              //     comment: validatedData.stage.comment,
              //     createdById: user.id,
              //   },
              // } : undefined,
            },
            select: PIPELINE_SELECT,
          });

          return pipeline;
        } else if (action === "REGRESS") {
          const regressData = await handleRegress(
            tx,
            existingPipeline,
            targetStage
          );

          // Direct update for regression
          const pipeline = await tx.pipeline.update({
            where: { id },
            data: {
              ...regressData,
              updatedById: user.id,
              // stages: {
              //   create: {
              //     stageTypeId: regressData.stageTypeId,
              //     comment: regressData.stageComment,
              //     createdById: user.id,
              //   },
              // },
            },
            select: PIPELINE_SELECT,
          });

          return pipeline;
        }
      });
    }

    // Normal update flow (without transition)
    validateProgression(existingPipeline, validatedData);

    const result = await prisma.$transaction(async (tx: any) => {
      // ... rest of the existing update logic
      const leadResult = await handleLead(
        tx,
        validatedData.lead,
        existingPipeline.leadId
      );
      const opportunityResult = await handleOpportunity(
        tx,
        validatedData.opportunity,
        existingPipeline.opportunityId,
        leadResult.id
      );
      const quoteResult = await handleQuote(
        tx,
        validatedData.quote,
        existingPipeline.quoteId,
        opportunityResult.id
      );
      const contractResult = await handleContract(
        tx,
        validatedData.contract,
        existingPipeline.contractId,
        quoteResult.id
      );

      let updateData: any = {
        updatedById: user.id,
        leadId: leadResult.id,
        opportunityId: opportunityResult.id,
        quoteId: quoteResult.id,
        contractId: contractResult.id,
      };

      if (validatedData.category) {
        updateData.category = validatedData.category;
      }

      if (validatedData.assigneeId !== undefined) {
        updateData.assigneeId = validatedData.assigneeId;
      }

      if (validatedData.memberIds) {
        updateData.members = {
          set: [...new Set(validatedData.memberIds)].map((id: string) => ({
            id,
          })),
        };
      }

      if (validatedData.stage) {
        updateData.stages = {
          create: {
            stageTypeId: validatedData.stage.stageTypeId,
            comment: validatedData.stage.comment,
            createdById: user.id,
          },
        };
      }

      const pipeline = await tx.pipeline.update({
        where: { id },
        data: updateData,
        select: PIPELINE_SELECT,
      });

      return pipeline;
    });

    return transformPipeline(result);
  },
  findMany: async (queryParams?: any) => {
    const pipelines = await prisma.pipeline.findMany({
      ...queryParams,
      select: PIPELINE_SELECT,
    });

    return pipelines.map((pipeline: any) => {
      const transformed = transformPipeline(pipeline);

      // Add flags for what exists
      const hasLead = !!transformed.leadId;
      const hasOpportunity = !!transformed.opportunityId;
      const hasQuote = !!transformed.quoteId;
      const hasContract = !!transformed.contractId;

      // Determine current stage (highest progression)
      let currentStage = "lead";
      if (transformed.contractId) currentStage = "contract";
      else if (transformed.quoteId) currentStage = "quote";
      else if (transformed.opportunityId) currentStage = "opportunity";

      // Remove earlier entities based on progression
      if (transformed.contractId) {
        delete transformed.lead;
        delete transformed.opportunity;
        delete transformed.quote;
      } else if (transformed.quoteId) {
        delete transformed.lead;
        delete transformed.opportunity;
      } else if (transformed.opportunityId) {
        delete transformed.lead;
      }

      // Remove the ID fields
      delete transformed.leadId;
      delete transformed.opportunityId;
      delete transformed.quoteId;
      delete transformed.contractId;

      return transformed;
    });
  },
  findUnique: async (id: string) => {
    const pipeline = await prisma.pipeline.findUnique({
      where: { id },
      select: PIPELINE_SELECT,
    });

    if (!pipeline) {
      throw new Error("Pipeline not found");
    }

    return transformPipeline(pipeline);
  },
};

const handleLead = async (tx: any, data: any, id?: string) => {
  if (!data) return { id, action: null };

  if (id) {
    // Update existing
    await tx.lead.update({
      where: { id },
      data: {
        ...data,
        products: data.products
          ? { set: data.products.map((id: string) => ({ id })) }
          : undefined,
      },
    });
    return { id, action: "updated" };
  } else {
    // Create new
    const regNumber = await applyRegNumber("lead", data.regNumber);
    const lead = await tx.lead.create({
      data: {
        ...data,
        regNumber: regNumber || data.regNumber,
        products: data.products
          ? { connect: data.products.map((id: string) => ({ id })) }
          : undefined,
      },
    });
    return { id: lead.id, action: "created" };
  }
};

const handleOpportunity = async (
  tx: any,
  data: any,
  id?: string,
  leadId?: string
) => {
  if (!data) return { id, action: null };
  if (id) {
    await tx.opportunity.update({
      where: { id },
      data: {
        ...data,
        products: data.products
          ? { set: data.productIds.map((id: string) => ({ id })) }
          : undefined,
      },
    });
    return { id, action: "updated" };
  } else {
    const regNumber = await applyRegNumber("opportunity", data.regNumber);
    const opportunity = await tx.opportunity.create({
      data: {
        ...data,
        regNumber: regNumber || data.regNumber,
        leadId,
        products: data.products
          ? { connect: data.products.map((id: string) => ({ id })) }
          : undefined,
      },
    });
    return { id: opportunity.id, action: "created" };
  }
};

const handleQuote = async (
  tx: any,
  data: any,
  id?: string,
  opportunityId?: string
) => {
  if (!data) return { id, action: null };
  if (id) {
    await tx.quote.update({
      where: { id },
      data: {
        ...data,
        products: data.products
          ? { set: data.products.map((id: string) => ({ id })) }
          : undefined,
      },
    });
    return { id, action: "updated" };
  } else {
    const regNumber = await applyRegNumber("quote", data.regNumber);
    const quote = await tx.quote.create({
      data: {
        ...data,
        regNumber: regNumber || data.regNumber,
        opportunityId,
        products: data.products
          ? { connect: data.products.map((id: string) => ({ id })) }
          : undefined,
      },
    });
    return { id: quote.id, action: "created" };
  }
};

const handleContract = async (
  tx: any,
  data: any,
  id?: string,
  quoteId?: string
) => {
  if (!data) return { id, action: null };
  if (id) {
    await tx.contract.update({
      where: { id },
      data: {
        ...data,
        products: data.products
          ? { set: data.products.map((id: string) => ({ id })) }
          : undefined,
      },
    });
    return { id, action: "updated" };
  } else {
    const regNumber = await applyRegNumber("contract", data.regNumber);
    const contract = await tx.contract.create({
      data: {
        ...data,
        regNumber: regNumber || data.regNumber,
        quoteId,
        products: data.products
          ? { connect: data.products.map((id: string) => ({ id })) }
          : undefined,
      },
    });
    return { id: contract.id, action: "created" };
  }
};

const handleProgress = async (
  tx: any,
  existingPipeline: any,
  targetStage: string,
  validatedData: any
) => {
  // Get the appropriate stage type based on target
  // const stageTypeMap: any = {
  //   OPPORTUNITY: "opportunity",
  //   QUOTE: "quote",
  //   CONTRACT: "contract",
  // };

  // const stageType = await tx.stageType.findFirst({
  //   where: {
  //     model: "pipeline",
  //     value: stageTypeMap[targetStage] || targetStage.toLowerCase(),
  //   },
  // });

  // if (!stageType) {
  //   throw new Error(`No stage type found for ${targetStage}`);
  // }

  switch (targetStage) {
    case "OPPORTUNITY":
      if (!existingPipeline.opportunityId) {
        if (!existingPipeline.leadId) {
          throw new Error("Cannot progress to Opportunity without Lead");
        }
        validatedData.opportunity = {
          title: `Opportunity - ${existingPipeline.lead?.name || "New"}`,
          clientId: existingPipeline.lead?.clientId,
          products:
            existingPipeline.lead?.products?.map((p: any) => p.id) || [],
        };
      }
      break;

    case "QUOTE":
      if (!existingPipeline.quoteId) {
        if (!existingPipeline.opportunityId) {
          throw new Error("Cannot progress to Quote without Opportunity");
        }
        validatedData.quote = {
          title: existingPipeline.opportunity?.title || "Quote",
          clientId: existingPipeline.opportunity?.clientId,
          currency: existingPipeline.opportunity?.currency,
          baseAmount: existingPipeline.opportunity?.baseAmount,
          exchangeRate: existingPipeline.opportunity?.exchangeRate,
          amount: existingPipeline.opportunity?.amount,
          expectedCloseDate: existingPipeline.opportunity?.expectedCloseDate,
          description: existingPipeline.opportunity?.description,
          products:
            existingPipeline.opportunity?.products?.map((p: any) => p.id) || [],
        };
      }
      break;

    case "CONTRACT":
      if (!existingPipeline.contractId) {
        if (!existingPipeline.quoteId) {
          throw new Error("Cannot progress to Contract without Quote");
        }
        validatedData.contract = {
          title: existingPipeline.quote?.title || "Contract",
          clientId: existingPipeline.quote?.clientId,
          currency: existingPipeline.quote?.currency,
          baseAmount: existingPipeline.quote?.baseAmount,
          exchangeRate: existingPipeline.quote?.exchangeRate,
          amount: existingPipeline.quote?.amount,
          description: existingPipeline.quote?.description,
          products:
            existingPipeline.quote?.products?.map((p: any) => p.id) || [],
        };
      }
      break;

    case "LEAD":
      throw new Error("Cannot progress to Lead - it's the first stage");
  }

  // validatedData.stage = {
  //   stageTypeId: stageType.id,
  //   comment: `Progressed to ${targetStage}`,
  // };
};

const handleRegress = async (
  tx: any,
  existingPipeline: any,
  targetStage: string
) => {
  // Check if regression is allowed
  const entityCount = [
    existingPipeline.leadId,
    existingPipeline.opportunityId,
    existingPipeline.quoteId,
    existingPipeline.contractId,
  ].filter(Boolean).length;

  if (entityCount <= 1) {
    throw new Error("Cannot regress - pipeline must have at least one entity");
  }

  // Get the appropriate stage type
  // const stageTypeMap: any = {
  //   LEAD: "lead",
  //   OPPORTUNITY: "opportunity",
  //   QUOTE: "quote",
  // };

  // const stageType = await tx.stageType.findFirst({
  //   where: {
  //     model: "pipeline",
  //     value: stageTypeMap[targetStage] || targetStage.toLowerCase(),
  //   },
  // });

  // if (!stageType) {
  //   throw new Error(`No stage type found for ${targetStage}`);
  // }

  const regressData: any = {
    updatedById: null, // Will be set in the update method
    // stageTypeId: stageType.id,
    // stageComment: `Regressed to ${targetStage}`,
  };

  switch (targetStage) {
    case "QUOTE":
      if (!existingPipeline.contractId) {
        throw new Error("Cannot regress to Quote - no Contract exists");
      }
      regressData.contractId = null;
      break;

    case "OPPORTUNITY":
      if (!existingPipeline.quoteId) {
        throw new Error("Cannot regress to Opportunity - no Quote exists");
      }
      regressData.quoteId = null;
      regressData.contractId = null;
      break;

    case "LEAD":
      if (!existingPipeline.opportunityId) {
        throw new Error("Cannot regress to Lead - no Opportunity exists");
      }
      regressData.opportunityId = null;
      regressData.quoteId = null;
      regressData.contractId = null;
      break;

    case "CONTRACT":
      throw new Error("Cannot regress to Contract - it's the last stage");
  }

  return regressData;
};
