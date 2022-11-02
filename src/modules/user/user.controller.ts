import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Post("login")
    login(@Param("id") id, @Param("pw") pw){
        return {
            success:true
        };
    }
}
