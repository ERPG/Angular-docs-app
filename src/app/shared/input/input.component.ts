import { Component, OnInit, Input } from '@angular/core';
import {
    FormControl,
    FormGroupDirective,
    ControlContainer,
} from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    viewProviders: [
        { provide: ControlContainer, useExisting: FormGroupDirective },
    ],
})
export class InputComponent implements OnInit {
    @Input() control: FormControl;
    @Input() id;
    @Input() type;
    @Input() placeholder;
    @Input() name;
    constructor() {}

    ngOnInit() {}
}
