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
    s: number = -1;


    constructor() {
        getUsers().then((users) => {
            this.users = users.utenti;

            console.log(this.users);
        });
    }

    ngOnInit(): void {
        this.ids = Number(window.location.href.at(-1)) - 1;
    }

    selezionato = (el:number) => {
        let lista: any = document.getElementById(el.toString())
        lista.classList.add("selezionato");
        if(el != this.users[el - 1].id) {
            lista.classList.remove("selezionato");
        };
    }

    sel = (i:number) => {
        if (this.s == i) { //toggle
            this.s = -1;
        } else {
            this.s = i;
        }
    }
}

