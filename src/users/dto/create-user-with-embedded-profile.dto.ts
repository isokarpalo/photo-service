export class CreateUserWithEmbeddedProfileDto {
    username: string;
    password: string;
    email: string;
    profile: {
        gender: string;
        photo: string;
    }
}