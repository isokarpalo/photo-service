import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserWithEmbeddedProfileDto } from './dto/create-user-with-embedded-profile.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

// todo: implememet dtos, controllers and services
// then test

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    async createUserEmbeddedProfile(
        @Body() createUserEmbeddedProfile: CreateUserWithEmbeddedProfileDto
    ): Promise<User> {
        return await this.usersService.insertUserWithEmbeddedProfile(createUserEmbeddedProfile)
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.usersService.getUsers();
    }
}
