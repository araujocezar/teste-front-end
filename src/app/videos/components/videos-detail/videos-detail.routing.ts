import { VideosDetailComponent } from './videos-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const VideoDetailRoutes: Routes = [
    {
        path: '',
        component: VideosDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(VideoDetailRoutes)],
    exports: [RouterModule]
})

export class VideoDetailRouting { }
