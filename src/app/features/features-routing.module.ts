import { DetailComponent } from './/detail/detail.component';
import { MainListComponent } from './main-list/main-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MainListComponent,
                pathMatch: 'full',
            },
            {
                path: 'detail/:id',
                component: DetailComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [],
    exports: [RouterModule],
})
export class FeaturesRoutingModule {}
