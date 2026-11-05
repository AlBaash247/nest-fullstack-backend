import { createParamDecorator, ExecutionContext } from "@nestjs/common";
export const CommonDecorator = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      const object = request.object;
  
      return data ? object?.[data] : object;
    },
  );