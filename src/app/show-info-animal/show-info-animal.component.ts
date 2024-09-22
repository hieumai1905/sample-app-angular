import {Component} from '@angular/core';
import {Pet} from "../pet";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-show-info-animal',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './show-info-animal.component.html',
  styleUrl: './show-info-animal.component.css'
})
export class ShowInfoAnimalComponent {
  pet: Pet = {
    name: 'Cat',
    image: 'https://i.pinimg.com/564x/e5/55/40/e555402af290cd801befb31f56adfa79.jpg'
  }
}
