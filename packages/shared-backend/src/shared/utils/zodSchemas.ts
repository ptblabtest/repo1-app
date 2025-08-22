export async function getModelSchema(model: string, type: string) {
  const modelName = model.charAt(0).toUpperCase() + model.slice(1);

  const schemaMap: Record<string, string> = {
    // Create Operations
    CreateOne: `${modelName}CreateOneSchema`,
    CreateMany: `${modelName}CreateManySchema`,

    // Read Operations
    FindUnique: `${modelName}FindUniqueSchema`,
    FindFirst: `${modelName}FindFirstSchema`,
    FindMany: `${modelName}FindManySchema`,

    // Update Operations
    UpdateOne: `${modelName}UpdateOneSchema`,
    UpdateMany: `${modelName}UpdateManySchema`,
    UpsertOne: `${modelName}UpsertOneSchema`,

    // Delete Operations
    DeleteOne: `${modelName}DeleteOneSchema`,
    DeleteMany: `${modelName}DeleteManySchema`,

    // Input Object Schemas
    CreateInput: `${modelName}CreateInputObjectSchema`,
    UpdateInput: `${modelName}UpdateInputObjectSchema`,
    WhereInput: `${modelName}WhereInputObjectSchema`,
    WhereUniqueInput: `${modelName}WhereUniqueInputObjectSchema`,
    OrderByInput: `${modelName}OrderByInputObjectSchema`,

    // Optional Schemas
    Select: `${modelName}SelectObjectSchema`,
    Include: `${modelName}IncludeObjectSchema`,
  };

  const schemaName = schemaMap[type];
  if (!schemaName) {
    throw new Error(`No schema mapping for type: ${type} (Model: ${model})`);
  }

  try {
    // Dynamically import only the schema you need
    const schemaModule = await import(
      `@generated/zod/schemas/${schemaName}.ts`
    );
    const schema = schemaModule[schemaName] || schemaModule.default;

    if (!schema) {
      throw new Error(`Schema ${schemaName} not found (Model: ${model})`);
    }

    return schema;
  } catch (error: any) {
    throw new Error(`Failed to load schema ${schemaName}: ${error.message}`);
  }
}

// Helper to validate input data
export async function validateInput(model: string, type: string, data: any) {
  const schema = await getModelSchema(model, type);
  return await schema.parseAsync(data);
}
