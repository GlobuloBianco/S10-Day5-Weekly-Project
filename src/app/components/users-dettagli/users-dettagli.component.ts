import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.interface';
import { getUsers } from 'src/app/service/users.service';

@Component({
    selector: 'app-users-dettagli',
    templateUrl: './users-dettagli.component.html',
    styleUrls: ['./users-dettagli.component.scss']
})
export class UsersDettagliComponent implements OnInit {
    ids!: number;
    user!: User;
    constructor(private ar: ActivatedRoute) { }

    ngOnInit(): void {
        this.ar.params.subscribe((e) => {
            this.ids = +e["id"];
            console.log(this.ids)
            getUsers().then((users) => {
                this.user = users[this.ids - 1];
            });
        })
    }
}
// le lacrime di gioia per aver finito dopo 11 ore di sofferenza di fila 😂.. si va a fare colazione..? suppongo
