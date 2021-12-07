import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hlmamin',
    loadChildren: () => import('./hlmamin/hlmamin.module').then( m => m.HlmaminPageModule)
  },
  {
    path: 'hlmhengky',
    loadChildren: () => import('./hlmhengky/hlmhengky.module').then( m => m.HlmhengkyPageModule)
  },
  {
    path: 'hlmwiwik',
    loadChildren: () => import('./hlmwiwik/hlmwiwik.module').then( m => m.HlmwiwikPageModule)
  },
  {
    path: 'detailamin',
    loadChildren: () => import('./detailamin/detailamin.module').then( m => m.DetailaminPageModule)
  },
  {
    path: 'detailhengky',
    loadChildren: () => import('./detailhengky/detailhengky.module').then( m => m.DetailhengkyPageModule)
  },
  {
    path: 'detailwiwik',
    loadChildren: () => import('./detailwiwik/detailwiwik.module').then( m => m.DetailwiwikPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
