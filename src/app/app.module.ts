import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconDirectives } from './directives/icon-directives';
import { DistanceConverterPipe } from './pipes/distance-converter-pipe';
import { DistanceTimePipe } from './pipes/distance-time-pipe';

@NgModule({
  declarations: [
    AppComponent,
    DistanceConverterPipe,
    DistanceTimePipe,
    IconDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
