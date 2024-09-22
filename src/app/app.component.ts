import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FontSizeEditorComponent} from "./font-size-editor/font-size-editor.component";
import {ShowInfoAnimalComponent} from "./show-info-animal/show-info-animal.component";
import {ShowListProductComponent} from "./show-list-product/show-list-product.component";
import {ComponentInteractionComponent} from "./component-interaction/component-interaction.component";
import {NameCardComponent} from "./name-card/name-card.component";
import {TodoComponent} from "./todo/todo.component";
import {TimelinesComponent} from "./timelines/timelines.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontSizeEditorComponent, ShowInfoAnimalComponent, ShowListProductComponent, ComponentInteractionComponent, NameCardComponent, TodoComponent, TimelinesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-app';

  changeTitle(value: string) {
    this.title = value;
  }
}
