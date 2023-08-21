import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccountModule } from 'src/Account/account.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  imports: [AccountModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants,
      signOptions: { expiresIn: '600000s' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule { }
