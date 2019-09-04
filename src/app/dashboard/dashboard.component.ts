import {Component} from '@angular/core';

import { pullRequests } from '../pullrequests';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  pullRequests = pullRequests;
}
