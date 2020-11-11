import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VideosCardComponent } from './videos-card.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        VideosCardComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule
    ],
    exports: [
        VideosCardComponent
    ],
    providers: [],
})
export class VideosCardModule { }
