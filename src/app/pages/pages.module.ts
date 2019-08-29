import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent } from './main-list/main-list.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocsApiService } from '../core/docs-api.service';
import { PagesRoutingModule } from 'src/app/pages/pages-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
    declarations: [MainListComponent, DetailComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
    ],
    providers: [DocsApiService],
})
export class PagesModule {}
