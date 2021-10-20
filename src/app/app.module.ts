import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ImagePipe } from './pipes/image.pipe';
import { ConvertDegressPipe } from './pipes/convert-degress.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // ImagePipe,
    // ConvertDegressPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
