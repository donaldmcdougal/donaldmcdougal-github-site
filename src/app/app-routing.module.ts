import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule'
  },
  {
    path: 'compression',
    loadChildren: './modules/compression/compression.module#CompressionModule'
  },
  {
    path: 'crypto',
    loadChildren: './modules/crypto/crypto.module#CryptoModule'
  },
  {
    path: 'files',
    loadChildren: './modules/files/files.module#FilesModule'
  },
  {
    path: 'metadata',
    loadChildren: './modules/metadata/metadata.module#MetadataModule'
  },
  {
    path: 'networking',
    loadChildren: './modules/networking/networking.module#NetworkingModule'
  },
  {
    path: 'neural',
    loadChildren: './modules/neural/neural.module#NeuralModule'
  },
  {
    path: 'northwind-backend',
    loadChildren: './modules/northwind-backend/northwind-backend.module#NorthwindBackendModule'
  },
  {
    path: 'northwind-client',
    loadChildren: './modules/northwind-client/northwind-client.module#NorthwindClientModule'
  },
  {
    path: 'this-site',
    loadChildren: './modules/this-site/this-site.module#ThisSiteModule'
  },
  {
    path: 'utils',
    loadChildren: './modules/utils/utils.module#UtilsModule'
  },
  {
    path: 'starter-backend',
    loadChildren: './modules/starter-backend/starter-backend.module#StarterBackendModule'
  },
  {
    path: 'starter-frontend',
    loadChildren: './modules/starter-frontend/starter-frontend.module#StarterFrontendModule'
  },
  {
    path: '**',
    loadChildren: './modules/page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
