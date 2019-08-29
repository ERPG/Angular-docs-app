import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-card-doc',
    templateUrl: './card-doc.component.html',
    styleUrls: ['./card-doc.component.scss'],
})
export class CardDocComponent implements OnInit {
    @Input() document: Document;
    @Input() index: number;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        // this.icon = far.
    }
}
