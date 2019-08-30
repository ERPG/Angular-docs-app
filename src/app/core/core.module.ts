import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DocsApiService } from './docs-api.service';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [DocsApiService],
    exports: [],
})
export class CoreModule {}
