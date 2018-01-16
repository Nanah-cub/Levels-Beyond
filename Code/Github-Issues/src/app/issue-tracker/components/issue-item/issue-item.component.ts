import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IssueIF} from '../../models/issueIF';
import { DatePipe } from '@angular/common';

/**
 * An indiviual issue item. It only shows the text of a specific issue
 */
@Component({
  selector: 'app-issue-item',
  styleUrls: ['./issue-item.component.scss'],
  template: `
    <div (click)="emitIssueItem()" [ngClass]="issue.activeIssue ? 'active' : ''" class="page-item">
      <span>Updated: {{issue.updated_at | date: 'shortDate'}}</span>
      <br>
      <span class="user">{{issue.title}}</span>
    </div>
  `
})
export class IssueItemComponent {

  /**
   * The issue that the Issue Item represents
   */
  @Input() issue: IssueIF;
  /**
   * An event emitter. When in issue is clicked it becomes active and shows up in IssueContentComponent
   */
  @Output() onIssue: EventEmitter<IssueIF> = new EventEmitter();

  /**
   * Emits an issue. It will be marked ass selected and show up in Issue Content
   */
  emitIssueItem() {
    this.onIssue.emit(this.issue);
  }


  constructor() {}


}
