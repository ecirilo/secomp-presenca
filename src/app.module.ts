import { Module } from '@nestjs/common';
import { PalestraController } from './app/controllers/palestra.controller';
import { PalestraService } from './app/services/palestra.service';
import { PresencaController } from './app/controllers/presenca.controller';
import { PresencaService } from './app/services/presenca.service';
import { DatabaseModule } from './app/data-source/database.module';
import { AlunoController } from './app/controllers/aluno.controller';
import { AlunoService } from './app/services/aluno.service';
import { AuthController } from './app/controllers/auth.controller';
import { UserService } from './app/services/user.service';
import { AuthService } from './app/services/auth.service';
import { JwtStrategy } from './app/auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'meuSegredoTecWeb',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [
    PalestraController,
    PresencaController,
    AlunoController,
    AuthController,
  ],
  providers: [
    PalestraService,
    PresencaService,
    AlunoService,
    UserService,
    AuthService,
    JwtStrategy,
  ],
})
export class AppModule {}
