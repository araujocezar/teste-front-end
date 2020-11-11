import { VideosDetailComponent } from './videos-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        VideosDetailComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule
    ],
    exports: [
        VideosDetailComponent
    ],
    providers: [],
})
export class VideosDetailModule { }
