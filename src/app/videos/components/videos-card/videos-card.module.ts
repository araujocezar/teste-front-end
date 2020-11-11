import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VideosCardComponent } from './videos-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material';


@NgModule({
    declarations: [
        VideosCardComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        VideosCardComponent
    ],
    providers: [],
})
export class VideosCardModule { }
