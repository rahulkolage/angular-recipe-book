import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[credit-card]",
})
export class CreditCardDirective {

  @HostBinding('style.border')
  border: string;

  @HostListener("input", ["$event"])
  onKeyDown(event: KeyboardEvent) {

    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');

    if(trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let numbers = [];
    for(let i=0; i< trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    // join valuesfrom "numbers" with space
    input.value = numbers.join(' ');


    // using hostbinding
    this.border = '';

    if(/[^\d]+/.test(trimmed)) {
      this.border = '1px solid red';
    }


  }
}
