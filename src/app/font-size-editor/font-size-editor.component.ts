import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-font-size-editor',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './font-size-editor.component.html',
  styleUrl: './font-size-editor.component.css'
})
export class FontSizeEditorComponent {
  fontSize: number = 14;

  constructor() {
  }

  updateFontSize(value: string) {
    this.fontSize = Number(value);
  }
}
