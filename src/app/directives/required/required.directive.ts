import {Directive, Input, OnInit} from '@angular/core';
import {NgControl, Validators} from "@angular/forms";

@Directive({
  selector: '[required]'
})
export class RequiredDirective implements OnInit{
  @Input() validationRules?: any[];


  constructor(private ngControl: NgControl) { }

  ngOnInit(): void {
    if(this.ngControl && this.validationRules) {

      const control = this.ngControl.control;
      this.validationRules.forEach(rule => {
        if (rule.type === 'required') {
          control?.setValidators(Validators.required);
        }
      });
    }
  }

}
