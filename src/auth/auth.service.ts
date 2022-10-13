import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';
import { createUserDto } from './dto/createUser.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Auth)
        private readonly repository: Repository<Auth>,
    ) {}

    async testAuth(): Promise<void> {
        console.log('\nthis is auth service');
        console.log('Hellooooooo');
    }

    async create(createDto: createUserDto) {
        return this.repository.save(createDto);
    }
}
