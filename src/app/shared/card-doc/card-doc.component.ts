import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-doc',
    templateUrl: './card-doc.component.html',
    styleUrls: ['./card-doc.component.scss'],
})
export class CardDocComponent implements OnInit {
    @Input() document: Document;
    @Input() index: number;
    constructor() {}

    ngOnInit() {}
}
