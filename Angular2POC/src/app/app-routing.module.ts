import { WellListsComponent } from './_components/well-lists/well-lists.component';
import { WellComponent } from './_components/well-lists/well/well.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'well-list', component: WellListsComponent },
	{ path: 'well', component: WellComponent },
	{ path: '**', redirectTo: 'well-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
