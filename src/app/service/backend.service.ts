import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {pullRequests} from '../pullrequests';
import {Observable, ObservedValueOf, of} from 'rxjs';
import {PullRequest} from '../model/PullRequest';

const url = environment.backendUrl;

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) {
  }

  // TODO add return type and corresponding data model
  getPullRequests(): Observable<PullRequest[]> {
    return this.http.get<PullRequest[]>(`${url}/pullRequests`);
  }

  // TODO the same
  getPullRequestsStub() {
    return of(pullRequests);
  }
}
