import { VideosDetailModule } from './videos/components/videos-detail/videos-detail.module';
import { VideosListModule } from './videos/components/videos-list/videos-list.module';
import { VideosCardModule } from './videos/components/videos-card/videos-card.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VideosCardModule,
    VideosListModule,
    VideosDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
