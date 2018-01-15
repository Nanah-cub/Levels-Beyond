import { TestBed, inject } from '@angular/core/testing';

import { IssueService } from './issue.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('IssueService', () => {
  let httpMock: HttpTestingController;
  let issueService: IssueService;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [IssueService]
    });
    issueService = TestBed.get(IssueService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('IssueService should be created', inject([IssueService], (service: IssueService) => {
    expect(service).toBeTruthy();
  }));
  it('Issue Service retrieveIssues', (done) => {
    issueService.retrieveIssues('angular', 'angular', '2017-12-26', 1).subscribe(issues => {
      expect(issues).toEqual([{
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
      }]);
      done();
    });
    const gitRequest = httpMock.expectOne('https://api.github.com/repos/angular/angular/issues?since=2017-12-26&page=1');
    gitRequest.flush([{
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
    }]);
    httpMock.verify();
  });
});
