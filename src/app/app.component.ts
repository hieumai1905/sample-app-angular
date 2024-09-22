import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FontSizeEditorComponent} from "./font-size-editor/font-size-editor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontSizeEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-app';
}
