import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent {
  @Input() reviewer;
}
