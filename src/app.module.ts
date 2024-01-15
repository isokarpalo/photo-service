import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmConfig } from './orm-config';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { PhotosModule } from './photos/photos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(OrmConfig.config), UsersModule, 
            ProfilesModule, PhotosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
