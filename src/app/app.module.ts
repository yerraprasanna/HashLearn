import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { CourselistComponent } from './courselist/courselist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAvatarModule, IgxIconModule, IgxListModule } from 'igniteui-angular';

//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    routingComponents,
    CourselistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxListModule,
    IgxIconModule,
    IgxAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
