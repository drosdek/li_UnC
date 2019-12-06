import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'main',
		pathMatch: 'full'
	},
	{
		path: 'main',
		loadChildren: () => import('./screen/main.module').then(m => m.MainComponentModule)
	},
	{
		path: 'scan',
		loadChildren: () => import('./screen/scanner.module').then(m => m.ScannerComponentModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
