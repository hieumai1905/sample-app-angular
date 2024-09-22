import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-component-interaction',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './component-interaction.component.html',
  styleUrl: './component-interaction.component.css'
})
export class ComponentInteractionComponent {
  @Input() titleOfChild: string | undefined;

  @Output() newTitleEvent = new EventEmitter<string>();

  changeTitleChild(value: string) {
    this.newTitleEvent.emit(value);
  }
}
