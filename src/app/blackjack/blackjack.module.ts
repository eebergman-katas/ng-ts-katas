import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlackjackRoutingModule } from './blackjack-routing.module';
import { BlackjackComponent } from './blackjack.component';

@NgModule({
  imports: [
    CommonModule,
    BlackjackRoutingModule
  ],
  declarations: [BlackjackComponent]
})
export class BlackjackModule { }
