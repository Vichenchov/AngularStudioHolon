import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { DrawingComponent } from './components/drawing/drawing.component';
import { TextComponent } from './components/text/text.component';
import { BottomComponent } from './components/bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DrawingComponent,
    TextComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
