import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IssueItemComponent} from './issue-item.component';
import {Component, ViewChild} from "@angular/core";
import {IssueIF} from "../../models/issueIF";

describe('IssueItemComponent', () => {
  let component: IssueItemTestComponent;
  let fixture: ComponentFixture<IssueItemTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueItemComponent, IssueItemTestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueItemTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('IssueItemComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing if event emitted', async(done) => {
    component.issueItemComponent.onIssue.subscribe(issue => {
      expect(issue).toEqual(component.issueItemComponent.issue);
      done();
    });
    component.issueItemComponent.emitIssueItem();
  });
});

@Component({
  selector: 'app-issue-item-test',
  template: `
    <app-issue-item #child [issue]="issue"></app-issue-item>
  `
})
class IssueItemTestComponent {
  @ViewChild('child' ) issueItemComponent: IssueItemComponent;

  public issue: IssueIF = {
    title: 'Issue Title',
    body: 'Issue body',
    user: {
      login: 'Josh'
    },
    assignee: {
      login: 'Peter'
    },
    created_at: '2018-01-08T21:32:05.039Z',
    updated_at: '2018-01-08T21:32:05.039Z'
  };
}
