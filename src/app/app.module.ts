import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SingletonComponent } from './singleton/singleton.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';

const routes: Route[] = [
  { path: 'Singleton', component: SingletonComponent },
  { path: 'FactoryMethod', component: FactoryMethodComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SingletonComponent,
    FactoryMethodComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
