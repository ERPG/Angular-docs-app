import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { CardDocComponent } from './card-doc/card-doc.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        InputComponent,
        ButtonComponent,
        LabelComponent,
        CardDocComponent,
    ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    exports: [
        InputComponent,
        ButtonComponent,
        LabelComponent,
        CardDocComponent,
    ],
})
export class SharedModule {}
