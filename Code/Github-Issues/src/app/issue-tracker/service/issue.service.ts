import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IssueIF} from '../models/issueIF';

/**
 * Issue Service handles the retrieval of information from the GIthub API
 */
@Injectable()
export class IssueService {

  constructor(private http: HttpClient) { }

  /**
   * Retrieves issues from a user, repository, date, and page
   * @param {string} user the user on Github
   * @param {string} repo the repo on Github
   * @param {string} date of when the issues should be retrieved
   * @param {number}
   * @returns {Observable<IssueIF[]>}
   */
  retrieveIssues(user: string, repo: string, date: string, page: number =  1): Observable<IssueIF []> {
    const urlString = `https://api.github.com/repos/${user}/${repo}/issues?since=${date}&page=${page}&sort=updated&direction=desc`;
    return this.http.get<IssueIF []>(urlString);
  }

}
