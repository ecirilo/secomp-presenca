import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { User } from '../domain/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(nome: string, senha: string): Promise<any> {
    const user: User = await this.userService.get(nome);
    if (user && user.senha === senha) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User): Promise<any> {
    const payload: any = { username: user.nome, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
