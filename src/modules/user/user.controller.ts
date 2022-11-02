import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Post("login")
    login(@Body() body){
        const {id,pw} = body;
        console.log(`user/login id:${id}, pw:${pw}`);
        if(id==="a"&&pw==="1") {
            return {
                success:true
            };
        }

        return {
            success:false
        };
    }
}
