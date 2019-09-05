import {Component, OnInit} from '@angular/core';

import {BackendService} from '../service/backend.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [BackendService],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // TODO set type
  pullRequests: any;

  constructor(private service: BackendService) {
  }

  ngOnInit() {
    // this.service
    //   .getPullRequestsStub()
    //   .subscribe((data: any) => this.pullRequests = data);
    // real backend request
    this.service
      .pullRequests
      .subscribe((data) => this.pullRequests = data);
  }
}
