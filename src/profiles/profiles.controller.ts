import { Controller, Get } from '@nestjs/common';
import { Profile } from './entities/profile.entity';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {

    constructor(private profilesService: ProfilesService) {}

    @Get()
    async getProfiles(): Promise<Profile[]> {
        return await this.profilesService.getProfiles();
    }

}