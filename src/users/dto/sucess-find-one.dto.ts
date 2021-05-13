import { CreateUserDto } from "./create-user.dto";

export class SuccessFindOneDto {
    success: boolean;
    msg: {
        user: object
    }
    
    constructor(success, msg) {
        this.success = success;
        this.msg = msg;
    }   
}
