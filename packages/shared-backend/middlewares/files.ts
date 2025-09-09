import prisma from "../lib/prisma";

export const saveFilesToDatabase = (modelField: string = "reportId") => {
  return async (req: any, res: any, next: any) => {
    try {
      // Store the file saving function in req for later use
      req.saveFiles = async (entityId: string) => {
        if (!req.files || req.files.length === 0) return [];

        const filePromises = req.files.map((file: any) =>
          prisma.file.create({
            data: {
              path: file.path.replace(process.cwd() + "/", ""),
              mimeType: file.mimetype,
              size: file.size,
              [modelField]: entityId, // Dynamic field name
            },
          })
        );

        return await Promise.all(filePromises);
      };

      next();
    } catch (error) {
      next(error);
    }
  };
};
