import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FeedsService } from 'src/app/services/feeds.service';
import { FeedElementComponent } from 'src/app/components/feed-element/feed-element.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FeedElementComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [FeedsService]
})
export class LayoutModule { }