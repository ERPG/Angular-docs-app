import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Input() type;
    @Input() disabled;
    @Input() text;
    @Input() class;

    constructor() {}

    ngOnInit() {}
}
