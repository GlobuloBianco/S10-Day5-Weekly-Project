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
    ids!: number;
    post!: Post;
    constructor(private ar: ActivatedRoute) {}

    ngOnInit(): void {
        //this.ids = Number(window.location.href.at(-1)) - 1; //vecchio metodo

        //--params--//
        this.ar.params.subscribe((e) => {
            this.ids = +e["id"];
            console.log(this.ids)
            getPosts().then((posts) => {
                this.post = posts[this.ids - 1];
            });
        })
    }

}
