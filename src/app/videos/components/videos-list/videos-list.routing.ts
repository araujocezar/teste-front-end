import { VideosListComponent } from './videos-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const VideoListRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: VideosListComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(VideoListRoutes)],
    exports: [RouterModule]
})

export class VideoListRouting { }
