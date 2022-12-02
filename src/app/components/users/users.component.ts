import { Component, OnInit } from '@angular/core';
import { getUsers } from 'src/app/service/users.service';
import { User } from 'src/app/models/user.interface';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users!: User[];
    ids!: number;

    constructor() {
        getUsers().then((users) => {
            this.users = users;
            console.log(this.users);
        });
    }

    ngOnInit(): void {}

    selezionato = (i: number) => {
        this.s = i;
    }


}

