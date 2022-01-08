import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedElement } from 'src/app/models/feed-element.interface';

@Component({
  selector: 'app-feed-element',
  templateUrl: './feed-element.component.html',
  styleUrls: ['./feed-element.component.scss']
})
export class FeedElementComponent implements OnInit {

  @Input() feedElement: FeedElement;
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.feedElement.video.url);
  }

  openModal(content: string) {
    this.modalService.open(content);
  }
}
