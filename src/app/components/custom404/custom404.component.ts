import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-custom404',
    templateUrl: './custom404.component.html',
    styleUrls: ['./custom404.component.scss']
})
export class Custom404Component implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {}

    goToHomepage = () => {
        this.router.navigate(['']);
    }
}
