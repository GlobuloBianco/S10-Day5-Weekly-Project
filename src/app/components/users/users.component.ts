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
            this.users = users.utenti;

            console.log(this.users);
        });
    }

    ngOnInit(): void {
        this.ids = Number(window.location.href.at(-1)) - 1;
    }

    selezionato = (el:any) => {
        let lista: any = document.getElementById(el)
        lista.classList.add("selezionato");
        if(el != this.users[el - 1].id) {
            lista.classList.remove("selezionato");
        };
    }


}

