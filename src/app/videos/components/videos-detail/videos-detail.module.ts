import { VideosDetailComponent } from './videos-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material';
import { VideoDetailRoutes } from './videos-detail.routing';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        VideosDetailComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        RouterModule.forChild(VideoDetailRoutes),

    ],
    exports: [
        VideosDetailComponent
    ],
    providers: [],
})
export class VideosDetailModule { }
