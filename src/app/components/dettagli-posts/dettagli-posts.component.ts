import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';
import { getPosts } from 'src/app/service/posts.service';

@Component({
    selector: 'app-dettagli-posts',
    templateUrl: './dettagli-posts.component.html',
    styleUrls: ['./dettagli-posts.component.scss']
})
export class DettagliPostsComponent implements OnInit {
    title!: string;
    body!: string;
    type!: string;
    author!: string;

    ids!: number;
    posts!: Post[];
    post!: Post;
    constructor(private ar: ActivatedRoute) {}

    ngOnInit(): void {
        this.ids = Number(window.location.href.at(-1)) - 1;
        //--params(snapshot)--//
        let id = +this.ar.snapshot.params['id']; //prende l'id (problemi di aggiornamento rotta children)
        console.log(id);
        //--params--//
        this.ar.params.subscribe((e) => {
            this.ids = +e["id"];
            getPosts().then((posts) => {
                this.post = posts[this.ids];
                this.title = JSON.stringify(posts[this.ids].title);
                this.body = JSON.stringify(posts[this.ids].body);
                this.type = JSON.stringify(posts[this.ids].type);
                this.author = JSON.stringify(posts[this.ids].author);
            });
        })
        //----//

    }

}
