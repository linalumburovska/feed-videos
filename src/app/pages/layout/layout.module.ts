import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FeedsService } from 'src/app/services/feeds.service';
import { FeedElementComponent } from 'src/app/components/feed-element/feed-element.component';
import { ModalAthleteInformationComponent } from 'src/app/components/modal-athlete-information/modal-athlete-information.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FeedElementComponent,
    ModalAthleteInformationComponent
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