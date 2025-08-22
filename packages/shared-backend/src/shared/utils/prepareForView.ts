export function prepareForView(data: any) {
  const result = { ...data };

  if (result.stages) {
    const latestStage = result.stages[result.stages.length - 1];
    result.stageTypeId = latestStage?.stageTypeId;
    result.stageName = latestStage?.type?.label;
    result.stageComment = latestStage?.comment;
  }

  if (result.assignee?.name) {
    result.assigneeName = result.assignee.name;
  }

  if (result.createdBy?.name) {
    result.createdByName = result.createdBy.name;
  }

  if (result.updatedBy?.name) {
    result.updatedByName = result.updatedBy.name;
  }

  if (result.reviewedBy?.name) {
    result.reviewedByName = result.reviewedBy.name;
  }

  if (result.members && Array.isArray(result.members)) {
    result.memberIds = result.members?.map((member: any) => member.id) || [];
    result.memberList =
      result.members?.map((member: any) => member.name).join(", ") || "";
  }

  delete result.members;

  delete result.stages;

  delete result.assignee;
  delete result.createdBy;
  delete result.updatedBy;
  delete result.reviewedBy;

  return result;
}
