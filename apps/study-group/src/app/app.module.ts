import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudgrReduxModule } from '@study-group/studgr-redux';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, StudgrReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
