import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent } from './main-list/main-list.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocsApiService } from './../core/docs-api.service';
import { FeaturesRoutingModule } from 'src/app/features/features-routing.module';

@NgModule({
    declarations: [MainListComponent, DetailComponent],
    imports: [
        CommonModule,
        FeaturesRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [DocsApiService],
})
export class FeaturesModule {}
