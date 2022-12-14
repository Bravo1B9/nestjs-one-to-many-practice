import { Controller, Body, Post, Get } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get()
  findAllUsers() {
    return this.userService.getAllUsers();
  }

}