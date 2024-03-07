import {Component, signal} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);

  public toggleContent (){ /* para cambiar el valor de showContent*/
    this.showContent.update( value => !value);
  }
}
