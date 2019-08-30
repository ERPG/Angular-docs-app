import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent } from './main-list/main-list.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocsApiService } from '../core/docs-api.service';
import { PagesRoutingModule } from 'src/app/pages/pages-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [MainListComponent, DetailComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        PagesRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        NgxPaginationModule,
    ],
    providers: [DocsApiService],
})
export class PagesModule {}
