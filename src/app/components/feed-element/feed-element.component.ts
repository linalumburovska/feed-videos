import { Component, Input, OnInit } from '@angular/core';
import { FeedElement } from 'src/app/models/feed-element.interface';

@Component({
  selector: 'app-feed-element',
  templateUrl: './feed-element.component.html',
  styleUrls: ['./feed-element.component.scss']
})
export class FeedElementComponent implements OnInit {

  @Input() feedElement: FeedElement;

  constructor() { }

  ngOnInit(): void {
  }

}
