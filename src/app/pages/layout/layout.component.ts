import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedElement } from 'src/app/models/feed-element.interface';
import { FeedsService } from 'src/app/services/feeds.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  feedData$: Observable<FeedElement[]>;

  constructor(private feedService: FeedsService) { }

  ngOnInit(): void {
    this.feedData$ = this.feedService.getFeedData();
  }

}
