import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueLandingComponent } from './issue-landing.component';
import {Observable} from 'rxjs/Observable';
import {IssueIF} from '../../models/issueIF';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import {IssueService} from '../../service/issue.service';

import {HttpClientModule} from '@angular/common/http';
import {IssueListComponent} from '../issue-list/issue-list.component';
import {IssueContentComponent} from '../issue-content/issue-content.component';
import {IssueItemComponent} from '../issue-item/issue-item.component';

describe('IssueLandingComponent', () => {
  let component: IssueLandingComponent;
  let fixture: ComponentFixture<IssueLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueLandingComponent, IssueListComponent, IssueContentComponent, IssueItemComponent],
      imports: [HttpClientModule],
      providers:  [{provide: IssueService, useClass: MockIssueService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('IssueLandingComponent should create', () => {
    expect(component).toBeTruthy();
    expect(component.issues).toBeTruthy();
    expect(component.issues[0].activeIssue).toBeTruthy();
  });
  it('onNext call from landing', (done) => {
    component.issuesObs.subscribe(issues => {
      expect(component.issues).toEqual(issues);
      done();
    });
    component.getNextIssues();
  });
  it('onPrev call from landing', (done) => {
    component.issuesObs.subscribe(issues => {
      expect(component.issues).toEqual(issues);
      done();
    });
    component.getPreviousIssues();
  });


});

@Injectable()
class MockIssueService {

  constructor() {}

  retrieveIssues(user: string, repo: string, date: string, page: number =  1): Observable<IssueIF []> {
    const issues: IssueIF [] =  [{
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
    return  Observable.of(issues);
  }
}
