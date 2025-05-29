import { textChangeRangeIsUnchanged } from "../node_modules/typescript/lib/typescript";

class User2{
    private _username!: string;

    constructor(username:string){
        this.username=username;
    }

    get username(): string{
        return this._username
    }

    set username(newUsername: string){
        if (newUsername.length <3){
            throw new Error('Username must be atleast 3 characters!')
        }
        this._username = newUsername
    }


}