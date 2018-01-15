import {Component, OnDestroy, OnInit} from '@angular/core';
import {IssueService} from '../../service/issue.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {IssueIF} from '../../models/issueIF';

/**
 * THe landing page for issues. If this was a SPA then it would be one of the pages
 */
@Component({
  selector: 'app-issue-landing',
  styleUrls: ['./issue-landing.component.scss'],
  template: `
    <div class="grid-container">
      <header class="issue-header">
        <h1>Angular Issues</h1>
      </header>
      <div class="content-container">
        <div class="col-xs-8">
          <app-issue-list (onNext)="getNextIssues()" (onPrev)="getPreviousIssues()" (onIssue)="onIssueEmit($event)"
                          *ngIf="this.issues.length > 0" [issues]="issues" class="col-xs-20"></app-issue-list>
        </div>
        <div class="col-xs-12">
          <app-issue-content *ngIf="selectedIssue" [issue]="selectedIssue"></app-issue-content>
        </div>
      </div>
    </div>`
})
export class IssueLandingComponent implements OnInit, OnDestroy {

  /**
   * An observable object representing a list of issues that occured in the last seven days
   */
  public issuesObs: Observable<IssueIF []>;
  /**
   * The list of issues that got selected from a Github api call
   */
  public issues: IssueIF [] = [];
  /**
   * Shows the selected issue in IssueContentComponent.
   */
  public selectedIssue: IssueIF;
  /**
   * Subscription object handling the Github API call
   */
  private _issueSubscription: Subscription;
  /**
   * The repo of a specific API call.
   */
  private _repo: string = 'angular';
  /**
   * The user of a specific API call
   */
  private _user: string = 'angular';
  /**
   * The current page for an API call
   */
  private _page: number;

  /**
   * Basic constructor
   * @param issueService: Handles API calls for Github
   */
  constructor(private issueService: IssueService) {
  }

  /**
   * Retrieves the first page of issues
   */
  ngOnInit() {
    this._retrieveIssues(1);
  }

  /**
   * Handles when issueItemList emits an event. It will make IssueContentComponent show the specific issue
   * @param issue
   */
  onIssueEmit(issue: IssueIF) {
    this.selectedIssue = issue;
  }

  /**
   * Unsubscribes the subscriptions
   */
  ngOnDestroy(): void {
    if (this._issueSubscription) {
      this._issueSubscription.unsubscribe();
    }
  }

  /**
   * Gets the next issues if there are any
   */
  getNextIssues() {
    this._retrieveIssues(this._page + 1);
  }

  /**
   * Gets the previous issues if there are any
   */
  getPreviousIssues() {
    this._retrieveIssues(this._page - 1);
  }

  /**
   * Handles the retrieval of issues
   * @param page
   */
  _retrieveIssues(page: number) {
    if (page > 0) {
      const currentDate = new Date();
      const sevenDaysBack = new Date(currentDate.setDate(currentDate.getDate() - 7));
      this.issuesObs = this.issueService.retrieveIssues(this._user, this._repo, sevenDaysBack.toISOString(), page);
      this._issueSubscription = this.issuesObs.subscribe(issues => {
        if (issues.length > 0) {
          this.issues = issues;
          this._page = page;
          this.issues[0].activeIssue = true;
          this.onIssueEmit(this.issues[0]);
        }
      });
    }
  }

}
