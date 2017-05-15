import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDoubleComponent } from 'app/sudo/test-double-sudo/test-double/test-double.component';
import { BlackjackComponent } from 'app/blackjack/blackjack.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDoubleComponent,
    BlackjackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
