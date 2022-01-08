import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedElement } from 'src/app/models/feed-element.interface';

@Component({
  selector: 'app-feed-element',
  templateUrl: './feed-element.component.html',
  styleUrls: ['./feed-element.component.scss'],
  animations: [
    trigger('changeBtnColor', [
      state('closedModal', style({
        backgroundColor: '',
      })),
      state('openedModal', style({
        backgroundColor: 'black',
      })),
      transition('closedModal=>openedModal', animate('500ms')),
      transition('openedModal=>closedModal', animate('500ms'))
    ])]
})
export class FeedElementComponent implements OnInit {

  @Input() feedElement: FeedElement;
  videoUrl: SafeResourceUrl;
  animationState: string = 'closedModal';

  constructor(private sanitizer: DomSanitizer, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.feedElement.video.url);
  }

  openModal(content: string) {
    this.animationState = 'openedModal';
    this.modalService.open(content);
  }

  animationReturnToNormal(value: boolean) {
    if(value) {
      this.animationState = 'closedModal';
    }
  }
}
