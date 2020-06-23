import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WellListsComponent } from './_components/well-lists/well-lists.component';
import { WellComponent } from './_components/well-lists/well/well.component';

@NgModule({
  declarations: [
    AppComponent,
    WellListsComponent,
    WellComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
	bootstrap: [AppComponent],
	entryComponents: [WellComponent]
})
export class AppModule { }
