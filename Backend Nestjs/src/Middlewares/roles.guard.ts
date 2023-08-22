import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { jwtConstants } from 'src/auth/constants';
import { Request } from 'express';

@Injectable()
export class RolesGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) { super() }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredType = this.reflector.get<string>('role', context.getHandler());

    if (!requiredType)
      return true;

    const req = context.switchToHttp().getRequest();

    if (requiredType.includes(await this.getAuthType(req)))
      return true;

    return false;
  }

  private async getAuthType(req: Request): Promise<string> {
    const token = this.extractTokenFromHeader(req);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: jwtConstants
        }
      );
      return payload.type;
    } catch {
      throw new UnauthorizedException();
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
