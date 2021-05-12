
export class StatusCreateUserDto {
    success: boolean;
    msg: string[]
    
    constructor(success,msg) {
        this.success = success;
        this.msg = msg;
    }
}
