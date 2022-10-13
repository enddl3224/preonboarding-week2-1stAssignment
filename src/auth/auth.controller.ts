import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { Auth } from './auth.entity';
import { AuthService } from './auth.service';
import { createUserDto } from './dto/createUser.dto';

@Controller('auth')
export class AuthController {
    constructor(private TestAuth: AuthService) {}

    @Get()
    getTestAuth(): Promise<void> {
        console.log('\nthis is auth controller');
        return this.TestAuth.testAuth();
    }

    @Post()
    async create(@Body() createUserDto: createUserDto) {
        const userInfo = await this.TestAuth.create(createUserDto);
        return userInfo;
      }

}