import { createParamDecorator, ExecutionContext } from "@nestjs/common";
export const MyHttpExampleDecorator = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
      const request = ctx.switchToHttp().getRequest();
      const myHttpExample = request.myHttpExample;
  
      return data ? myHttpExample?.[data] : myHttpExample;
    },
  );