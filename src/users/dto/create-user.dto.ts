export class CreateUserDto {
    full_name: string;
    email: string;
    password: string;
    role: string;
    address: string;
    phone_number: string;
    created_at: Date;
    avatar: string;
    isActive: boolean;
    birth_date: Date;
}