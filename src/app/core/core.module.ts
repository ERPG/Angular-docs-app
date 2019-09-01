import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DocsApiService } from './docs-api.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [DocsApiService],
  exports: [HeaderComponent]
})
export class CoreModule {}
