import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Component, ViewChild} from '@angular/core';
import {IssueIF} from '../../models/issueIF';
import {IssueItemComponent} from '../issue-item/issue-item.component';
import {IssueListComponent} from './issue-list.component';

describe('IssueListComponent', () => {
  let component: IssueListTestComponent;
  let fixture: ComponentFixture<IssueListTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueListTestComponent, IssueItemComponent, IssueListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ItemListComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('ItemListComponent onInit', () => {
    const issueComponent: IssueListComponent = component.issueListComponent;
    expect(issueComponent.issues.length).toEqual(11);
  });
  it('Test next button', () => {
    const issueComponent: IssueListComponent = component.issueListComponent;
    spyOn(issueComponent.onNext, 'emit');
    issueComponent.nextIssues();
    expect(issueComponent.onNext.emit).toHaveBeenCalled();
  });
  it('Test prev button when on first page', () => {
    const issueComponent: IssueListComponent = component.issueListComponent;
    spyOn(issueComponent.onPrev, 'emit');
    issueComponent.lastIssues();
    expect(issueComponent.onPrev.emit).toHaveBeenCalled();
  });
  it('Test when no data', () => {
    component.issues = [];
    fixture.detectChanges();
    expect(component.issueListComponent.issues.length).toEqual(0);
  });



});

@Component({
  selector: 'app-issue-item-test',
  template: `
    <app-issue-list #child [issues]="issues"></app-issue-list>
  `
})
class IssueListTestComponent {
  @ViewChild('child') issueListComponent: IssueListComponent;

  public issues: IssueIF [] = [{
    title: 'Issue Title 1',
    body: 'Issue body',
    user: {
      login: 'Josh'
    },
    assignee: {
      login: 'Peter'
    },
    created_at: '2018-01-08T21:32:05.039Z',
    updated_at: '2018-01-08T21:32:05.039Z'
  },
    {
      title: 'Issue Title 2',
      body: 'Issue body',
      user: {
        login: 'Josh'
      },
      assignee: {
        login: 'Peter'
      },
      created_at: '2018-01-08T21:32:05.039Z',
      updated_at: '2018-01-08T21:32:05.039Z'
    },
    {
      title: 'Issue Title 3',
      body: 'Issue body',
      user: {
        login: 'Josh'
      },
      assignee: {
        login: 'Peter'
      },
      created_at: '2018-01-08T21:32:05.039Z',
      updated_at: '2018-01-08T21:32:05.039Z'
    },
    {
      title: 'Issue Title 4',
      body: 'Issue body',
      user: {
        login: 'Josh'
      },
      assignee: {
        login: 'Peter'
      },
      created_at: '2018-01-08T21:32:05.039Z',
      updated_at: '2018-01-08T21:32:05.039Z'
    },
    {
      title: 'Issue Title 5',
      body: 'Issue body',
      user: {
        login: 'Josh'
      },
      assignee: {
        login: 'Peter'
      },
      created_at: '2018-01-08T21:32:05.039Z',
      updated_at: '2018-01-08T21:32:05.039Z'
    },
    {
      title: 'Issue Title 6',
      body: 'Issue body',
      user: {
        login: 'Josh'
      },
      assignee: {
        login: 'Peter'
      },
      created_at: '2018-01-08T21:32:05.039Z',
      updated_at: '2018-01-08T21:32:05.039Z'
    },
    {
      title: 'Issue Title 7',
      body: 'Issue body',
      user: {
        login: 'Josh'
      },
      assignee: {
        login: 'Peter'
      },
      created_at: '2018-01-08T21:32:05.039Z',
      updated_at: '2018-01-08T21:32:05.039Z'
    },
    {
      title: 'Issue Title 8',
      body: 'Issue body',
      user: {
        login: 'Josh'
      },
      assignee: {
        login: 'Peter'
      },
      created_at: '2018-01-08T21:32:05.039Z',
      updated_at: '2018-01-08T21:32:05.039Z'
    },
    {
      title: 'Issue Title 9',
      body: 'Issue body',
      user: {
        login: 'Josh'
      },
      assignee: {
        login: 'Peter'
      },
      created_at: '2018-01-08T21:32:05.039Z',
      updated_at: '2018-01-08T21:32:05.039Z'
    },
    {
      title: 'Issue Title 10',
      body: 'Issue body',
      user: {
        login: 'Josh'
      },
      assignee: {
        login: 'Peter'
      },
      created_at: '2018-01-08T21:32:05.039Z',
      updated_at: '2018-01-08T21:32:05.039Z'
    },
    {
      title: 'Issue Title 11',
      body: 'Issue body',
      user: {
        login: 'Josh'
      },
      assignee: {
        login: 'Peter'
      },
      created_at: '2018-01-08T21:32:05.039Z',
      updated_at: '2018-01-08T21:32:05.039Z'
    }
  ];
}
