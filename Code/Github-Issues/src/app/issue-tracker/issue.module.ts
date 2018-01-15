import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IssueLandingComponent} from './components/issue-landing/issue-landing.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueItemComponent } from './components/issue-item/issue-item.component';
import {IssueService} from './service/issue.service';
import {HttpClientModule} from '@angular/common/http';
import { IssueContentComponent } from './components/issue-content/issue-content.component';

/**
 * Issue Module that loads all dependences for issue Module
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [IssueLandingComponent, IssueListComponent, IssueItemComponent, IssueContentComponent],
  exports: [IssueLandingComponent],
  providers: [IssueService]
})
export class IssueModule { }
