 import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-accordion',
  templateUrl: './collapse-accordion.component.html',
  styleUrls: ['./collapse-accordion.component.scss']
})
export class CollapseAccordionComponent {
  @Input() name
}
