import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppAuthGuard } from './app-auth.guard';

import { StateLandingComponent } from './state-landing/state-landing.component';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { FullVrViewComponent } from './full-vr-view/full-vr-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'state-landing',
    pathMatch: 'full'
  },
  {
    path: 'state-landing',
    component: StateLandingComponent
  },
  {
    path: 'gallery-view',
    component: GalleryViewComponent
  },
  {
    path: 'full-vr-view',
    component: FullVrViewComponent
  },
  {
    path: '**',
    redirectTo: 'state-landing',
    pathMatch: 'full'
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })

// export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes, {
  useHash: true
});
