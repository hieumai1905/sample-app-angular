import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-name-card',
  standalone: true,
  imports: [],
  templateUrl: './name-card.component.html',
  styleUrl: './name-card.component.css'
})
export class NameCardComponent {
  @Input() cardName!: string;
  @Input() email!: string;
  @Input() phone!: string;

  constructor() {
  }
}
