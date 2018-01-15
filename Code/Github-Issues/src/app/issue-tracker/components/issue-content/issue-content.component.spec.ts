import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueContentComponent } from './issue-content.component';
import {Component, ViewChild} from '@angular/core';
import {IssueIF} from '../../models/issueIF';

describe('IssueContentComponent', () => {
  let component: IssueContentTestComponent;
  let fixture: ComponentFixture<IssueContentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueContentTestComponent, IssueContentComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueContentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('IssueContentComponent should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-issue-content-test',
  template: `
    <app-issue-content #child [issue]="issue"></app-issue-content>
  `
})
class IssueContentTestComponent {
  @ViewChild('child' ) issueContentComponent: IssueContentComponent;

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
