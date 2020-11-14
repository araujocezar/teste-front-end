import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosListComponent } from './videos/components/videos-list/videos-list.component';
import { VideosListModule } from './videos/components/videos-list/videos-list.module';

const routes: Routes = [
    {
    path: '',
    loadChildren: './videos/components/videos-list/videos-list.module#VideosListModule',
    },
    {
      path: ':id',
      loadChildren: './videos/components/videos-detail/videos-detail.module#VideosDetailModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
