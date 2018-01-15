import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {IssueIF} from '../../models/issueIF';
import {isNil} from 'lodash';
import { OnChanges } from '@angular/core';

/**
 * Contains information about a specific issue
 */
@Component({
  selector: 'app-issue-content',
  styleUrls: ['./issue-content.component.scss'],
  template: `
    <div class="issue-content-container">
      <span><b>Created By: </b>{{issue.user.login}}</span>
      <br>
      <span><b>Assigned To: </b>{{assignedToText}}</span>
      <h3>{{issue.title}}</h3>
      <div class="embedded-html" [innerHTML]="issue.body"></div>
    </div>
  `
})
export class IssueContentComponent implements OnChanges {


  /**
   * The selected issue
   */
  @Input() issue: IssueIF;
  /**
   * The text display of who/what assigned an issue
   */
  public assignedToText: string;

  /**
   * Default constructor
   */
  constructor() {}


  ngOnChanges(changes: SimpleChanges): void {
    if (isNil(this.issue.assignee)) {
      this.assignedToText = 'No One';
    } else {
      this.assignedToText = this.issue.assignee.login;
    }
  }

}
