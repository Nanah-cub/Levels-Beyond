import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IssueIF} from '../../models/issueIF';

/**
 * IssueListComponent shows a list of issues to select from as two buttons for navigating
 */
@Component({
  selector: 'app-issue-list',
  styleUrls: ['./issue-list.component.scss'],
  template: `
    <article>
      <div class="issue-table">
        <div class="issue-item" *ngFor="let issue of issues;">
          <app-issue-item (onIssue)="onIssueEmit($event)" [issue]="issue"></app-issue-item>
        </div>
        <div class="issue-item">
          <div>
            <button (click)="lastIssues()">Prev</button>
            <button (click)="nextIssues()">Next</button>
          </div>
        </div>
      </div>
    </article>`
})
export class IssueListComponent {

  /**
   * The array of issues to show in the list
   * @type {Array}
   */
  @Input() issues: IssueIF [] = [];
  /**
   * When an issue has been selected this will show in IssueContentComponent
   * @type {EventEmitter<any>}
   */
  @Output() onIssue: EventEmitter<IssueIF> = new EventEmitter(true);
  /**
   * When the next button is pressed it will get the next issues
   * @type {EventEmitter<any>}
   */
  @Output() onNext: EventEmitter<IssueIF> = new EventEmitter();
  /**
   * When the previous button is pressed it will get the last page of issues
   * @type {EventEmitter<any>}
   */
  @Output() onPrev: EventEmitter<IssueIF> = new EventEmitter();

  /**
   * Default constructor
   */
  constructor() {}

  /**
   * Handles when an issue is emitted to IssueContentComponent
   * @param {IssueIF} issue
   */
  onIssueEmit(issue: IssueIF) {
    if (this.issues.length > 0) {
      this.setActiveIssue(issue);
      this.onIssue.emit(issue);
    }
  }

  /**
   * Sets the active issue
   * @param {IssueIF} issue
   */
  setActiveIssue(issue: IssueIF) {
    this.issues.forEach(value => {
      value.activeIssue = value === issue;
    });
  }

  /**
   * Emits an event for the landing page to handle the retrieval of the last issues
   */
  lastIssues() {
      this.onPrev.emit();
  }

  /**
   * Emits and event for the landing page to handle the retrieval of the next issues
   */
  nextIssues() {
      this.onNext.emit();
  }


}
