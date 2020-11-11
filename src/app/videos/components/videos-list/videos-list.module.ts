import { VideosCardModule } from './../videos-card/videos-card.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule  } from '@angular/material';
import { VideosListComponent } from './videos-list.component';
import { Routes, RouterModule } from '@angular/router';
import { VideoListRoutes } from './videos-list.routing';

@NgModule({
    declarations: [
        VideosListComponent,
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(VideoListRoutes),
        VideosCardModule
    ],

    exports: [
        VideosListComponent,
    ],
    providers: [],
})
export class VideosListModule { }
