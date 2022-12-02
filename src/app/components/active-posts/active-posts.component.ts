import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { getPosts } from 'src/app/service/posts.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss']
})

export class ActivePostsComponent implements OnInit {
    posts!: Post[];
    constructor() {
        getPosts().then((posts) => {
            this.posts = posts;
            console.log(this.posts);
        });
    }

    ngOnInit(): void {}

    disattiva = (element: number) => {
        console.log(this.posts)
        //aggiorna il JSON (serve json-server)
        fetch('http://localhost:3000/lista' + '/' + element, {
            method: 'PATCH',
            body: JSON.stringify({
                active: false,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        window.location.reload()
    }
}
