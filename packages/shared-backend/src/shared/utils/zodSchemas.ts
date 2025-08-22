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
    CreateInput: `${modelName}CreateInputObjectZodSchema`,
    UpdateInput: `${modelName}UpdateInputObjectZodSchema`,
    WhereInput: `${modelName}WhereInputObjectZodSchema`,
    WhereUniqueInput: `${modelName}WhereUniqueInputObjectZodSchema`,
    OrderByInput: `${modelName}OrderByInputObjectZodSchema`,
    // Optional Schemas
    Select: `${modelName}SelectObjectZodSchema`,
    Include: `${modelName}IncludeObjectZodSchema`,
  };
  
  const schemaName = schemaMap[type];
  console.log('Looking for schema:', schemaName, 'for model:', model, 'type:', type);
  
  if (!schemaName) {
    throw new Error(`No schema mapping for type: ${type} (Model: ${model})`);
  }
  
  try {
    console.log('Attempting to import @generated/zod/schemas...');
    
    // Use dynamic import instead of require
    const schemas = await require('@generated/zod/schemas');
    
    console.log('Successfully loaded schemas file');
    
    const schema = schemas[schemaName];
    console.log('Found schema?', !!schema);
    
    if (!schema) {
      throw new Error(`Schema ${schemaName} not found (Model: ${model})`);
    }
    
    return schema;
  } catch (error: any) {
    console.error('Error loading schema:', error.message);
    throw new Error(`Failed to load schema ${schemaName}: ${error.message}`);
  }
}

// Helper to validate input data
export async function validateInput(model: string, type: string, data: any) {
  const schema = await getModelSchema(model, type);
  
  // Use Zod's passthrough() to ignore extra fields
  const flexibleSchema = schema.passthrough();
  
  // Or use strip() to remove unknown keys (default behavior)
  const strictSchema = schema.strip();
  
  return await flexibleSchema.parseAsync(data);
}