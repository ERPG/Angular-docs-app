import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { Document } from 'src/app/core/models/doc-model';
@Component({
  selector: 'app-card-doc',
  templateUrl: './card-doc.component.html',
  styleUrls: ['./card-doc.component.scss']
})
export class CardDocComponent implements OnInit {
  @Input() document: Document;
  @Input() index: number;
  public imageUrl: SafeUrl;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.document) {
      this.imageUrl = this.domSanitizer.bypassSecurityTrustUrl(this.document.imagePath);
    }
  }
}
