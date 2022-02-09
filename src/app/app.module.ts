import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SingletonComponent } from './singleton/singleton.component';

const routes: Route[] = [
  { path: 'Singleton', component: SingletonComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SingletonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
