import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: '[tooltip ]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {

  tooltipElement = document.createElement('div');
  visiable = false;

  @Input()
  set tooltip(value) {
    this.tooltipElement.textContent = value;
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip--active');
  }

  show() {
    this.tooltipElement.classList.add('tooltip--active');
  }

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.tooltipElement.classList.add('tooltip-container');
  }
}
