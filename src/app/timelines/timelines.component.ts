import {Component} from '@angular/core';
import {DateUtilService} from "../service/date-util.service";

@Component({
  selector: 'app-timelines',
  standalone: true,
  imports: [],
  templateUrl: './timelines.component.html',
  styleUrl: './timelines.component.css'
})
export class TimelinesComponent {

  output = '';

  constructor(private dateUtilService: DateUtilService) {
  }

  onChange(value: any) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
