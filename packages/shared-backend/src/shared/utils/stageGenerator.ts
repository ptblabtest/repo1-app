import prisma from "../../lib/prisma";

export async function applyStageCreate(
  model: string, 
  stageTypeId: string | undefined,
  stageComment: string | undefined,
  createdById: string
) {
  if (stageTypeId) {
    return {
      create: {
        stageTypeId,
        comment: stageComment || `${model.charAt(0).toUpperCase() + model.slice(1)} created`,
        createdById,
      }
    };
  }
  
  const stage = await prisma.stageType.findFirst({ 
    where: { model, order: 1 } 
  });
  
  if (stage) {
    return {
      create: {
        stageTypeId: stage.id,
        comment: `${model.charAt(0).toUpperCase() + model.slice(1)} created`,
        createdById,
      }
    };
  }
  
  return undefined;
}

export async function applyStageUpdate(
  model: string,
  stageTypeId: string | undefined,
  stageComment: string | undefined,
  createdById: string
) {
  if (stageTypeId) {
    return {
      create: {
        stageTypeId,
        comment: stageComment || `Stage updated for ${model}`,
        createdById,
      }
    };
  }
  return undefined;
}