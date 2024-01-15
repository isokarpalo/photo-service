import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfilesService } from 'src/profiles/profiles.service';
import { Repository } from 'typeorm';
import { CreateUserWithEmbeddedProfileDto } from './dto/create-user-with-embedded-profile.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) 
    private usersRepository: Repository<User>,
    private readonly profilesService: ProfilesService) {}

    async insertUserWithEmbeddedProfile(createUserEmbeddedProfile: CreateUserWithEmbeddedProfileDto) {
        // insert the profile
        const profile = await this.profilesService.insertProfile(
            createUserEmbeddedProfile.profile.gender,
            createUserEmbeddedProfile.profile.photo,
        );

        // create user with profile and save it to db
        const user = new User();
        user.username = createUserEmbeddedProfile.username;
        user.password = createUserEmbeddedProfile.password;
        user.email = createUserEmbeddedProfile.email;
        user.profile = profile;
        return this.usersRepository.save(user);
    }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find({relations: ["profile"]});
    }

    async findUserByEmail(email: string): Promise<User> {
        return await this.usersRepository.findOne({"where": {email: email}});
    }

    async findUserByUsername(username: string): Promise<User> {
        return await this.usersRepository.findOne({where:{username: username}});
    }


}
