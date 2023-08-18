//roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean { 
    const requiredType = this.reflector.get<string>('role', context.getHandler());
    if (!requiredType) {
      return true;
    }

    const user = context.switchToHttp().getRequest().user;

    if (user.type === requiredType) {
      return true;
    }

    return false;
  }
}
