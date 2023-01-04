import { EventEmitter } from "@angular/core";

export class UsersService{
    users: {name: string, isActive: boolean}[] = [
        {name: "Ricardo", isActive: true},
        {name: "Torres", isActive: false},
        {name: "Alonso", isActive: true},
        {name: "Ana", isActive: false},
        {name: "Mccree", isActive: false}
    ];

    counterDeactivating: number = 0;
    counterActivating: number = 0;

    activated = new EventEmitter<number>();
    deactivated = new EventEmitter<number>();

    addUser(name:string, isActive: boolean){
        this.users.push({name, isActive});
    }

    changeStatus(id: number, newStatus: boolean)
    {
        this.users[id].isActive = newStatus;

        if(newStatus){
            this.activated.emit(++this.counterActivating);
        }else{
            this.deactivated.emit(++this.counterDeactivating);
        }
    }
}