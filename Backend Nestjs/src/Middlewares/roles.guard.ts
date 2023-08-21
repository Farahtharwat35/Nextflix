//roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RolesGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private reflector: Reflector) {super()}

  canActivate(context: ExecutionContext): boolean { 
    const requiredType = this.reflector.get<string>('role', context.getHandler());
    if (!requiredType) {
      return true;
    }
    console.log("-------------------Test:",context.switchToHttp().getRequest())
    const user = context.switchToHttp().getRequest().user;

    if (user.type === requiredType) {
      return true;
    }

    return false;
  }
}
