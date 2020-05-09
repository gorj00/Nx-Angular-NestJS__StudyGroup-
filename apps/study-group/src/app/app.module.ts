import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@study-group/core';
import { StudgrReduxModule } from '@study-group/studgr-redux';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule, StudgrReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
