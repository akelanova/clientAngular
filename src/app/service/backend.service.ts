import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {pullRequests} from '../pullrequests';
import {Observable, ObservedValueOf, of} from 'rxjs';
import {PullRequest} from '../model/PullRequest';

const url = environment.backendUrl;
import {interval} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';

@Injectable()
export class BackendService {

 readonly pullRequests = interval(1000).pipe(
   switchMap(_ => this.getPullRequests()),
   tap(_ => console.log('xxxx'))
 );
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
