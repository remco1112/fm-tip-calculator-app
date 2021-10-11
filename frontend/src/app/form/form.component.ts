import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  formGroup: FormGroup = new FormGroup({
    bill: new FormControl(''),
    tip: new FormControl(''),
    customTip: new FormControl(''),
    nrOfPeople: new FormControl('')
  }, (control) => {
    return !control.get('bill')?.value
      || isNaN(control.get('bill')?.value)
      || !control.get('nrOfPeople')?.value
      || isNaN(control.get('nrOfPeople')?.value)
      || (!control.get('customTip')?.value
        || isNaN(control.get('customTip')?.value)
      )
      && (!control.get('tip')?.value
        || isNaN(control.get('tip')?.value)
    ) ? {'error': true} : null
  });

  @Output() formCompleted = new EventEmitter<{
    bill: number,
    nrOfPeople: number,
    tip: number
  }>();

  ngOnInit(): void {
    this.formGroup.get('tip')?.valueChanges.subscribe(() => {
      this.formGroup.get('customTip')?.setValue('');
    });

    this.formGroup.valueChanges.subscribe((val) => {
      if (!this.formGroup.hasError('error')) {
        this.formCompleted.emit({
          bill: val.bill,
          nrOfPeople: val.nrOfPeople,
          tip: Number(val.tip || val.customTip)
        })
      }
    })
  }

  focusCustom() {
    this.formGroup.get('tip')?.setValue('');
  }

}
