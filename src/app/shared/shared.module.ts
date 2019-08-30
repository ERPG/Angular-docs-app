import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { CardDocComponent } from './card-doc/card-doc.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from '../services/modal.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [
        InputComponent,
        ButtonComponent,
        LabelComponent,
        CardDocComponent,
        ModalComponent,
        FilterPipe,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    providers: [ModalService],
    exports: [
        InputComponent,
        ButtonComponent,
        LabelComponent,
        CardDocComponent,
        ModalComponent,
        FilterPipe,
    ],
})
export class SharedModule {}
