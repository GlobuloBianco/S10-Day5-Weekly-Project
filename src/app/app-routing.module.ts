import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { UsersComponent } from './components/users/users.component';
import { DettagliPostsComponent } from './components/dettagli-posts/dettagli-posts.component';
import { UsersDettagliComponent } from './components/users-dettagli/users-dettagli.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "posts/active",
        component: ActivePostsComponent,
        /*
        children: [
            {
                path: ":id",
                component: DettagliPostsComponent
            }
        ] */
    },
    {
        path: "posts/inactive",
        component: InactivePostsComponent
    },
    {
        path: "posts/inactive/:id",
        component: DettagliPostsComponent
    },
    {
        path: "posts/active/:id",
        component: DettagliPostsComponent
    },
    {
        path: "users",
        component: UsersComponent,
        children:[
            {
                path:":id",
                component: UsersDettagliComponent
            }
        ]
    },
    {
        path: '**',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
