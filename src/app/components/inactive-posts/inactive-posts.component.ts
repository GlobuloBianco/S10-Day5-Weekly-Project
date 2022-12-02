import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { getPosts } from 'src/app/service/posts.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss']
})

export class InactivePostsComponent implements OnInit {
    posts!: Post[];

    constructor() {
        getPosts().then((posts) => {
            this.posts = posts;
            console.log(this.posts);
        });
    }

    ngOnInit(): void {}

    attiva = (element: number) => {
        console.log(this.posts)
        //aggiorna il JSON
        fetch('http://localhost:3000/lista' + '/' + element, {
            method: 'PATCH',
            body: JSON.stringify({
                active: true,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        window.location.reload()
    }
}
