import { Router } from 'express';

const wrapAsync = (fn: any) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export const patchRouter = () => {
  const originalRoute = Router.prototype.route;
  
  Router.prototype.route = function(path: string) {
    const route = originalRoute.call(this, path);
    
    ['get', 'post', 'put', 'delete', 'patch'].forEach(method => {
      const originalMethod = route[method];
      route[method] = function(...handlers: any[]) {
        return originalMethod.apply(this, handlers.map(handler => {
          if (handler.length <= 3) {
            return wrapAsync(handler);
          }
          return handler;
        }));
      };
    });
    
    return route;
  };
};