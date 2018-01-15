import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IssueLandingComponent } from './issue-tracker/components/issue-landing/issue-landing.component';
import {IssueModule} from './issue-tracker/issue.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IssueModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
