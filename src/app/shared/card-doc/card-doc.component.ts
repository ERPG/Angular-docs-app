import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Document } from 'src/app/core/models/doc-model';
@Component({
  selector: 'app-card-doc',
  templateUrl: './card-doc.component.html',
  styleUrls: ['./card-doc.component.scss']
})
export class CardDocComponent implements OnInit {
  @Input() document: Document;
  @Input() index: number;
  @Input() pageSize: number;
  @Input() actualPage;
  public elementIndex: number;
  public imageUrl: SafeUrl;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.document) {
      this.imageUrl = this.domSanitizer.bypassSecurityTrustUrl(this.document.imagePath);
      this.getElementIndex();
    }
  }

  getElementIndex(): void {
    this.elementIndex = this.actualPage > 1 ? this.pageSize * (this.actualPage - 1) + this.index : this.index;
  }
}
