import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FontSizeEditorComponent} from "./font-size-editor/font-size-editor.component";
import {ShowInfoAnimalComponent} from "./show-info-animal/show-info-animal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontSizeEditorComponent, ShowInfoAnimalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-app';
}
