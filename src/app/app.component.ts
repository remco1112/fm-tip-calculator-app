import {Component, ViewChild} from '@angular/core';
import {FormComponent} from "./form/form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  pp: string = '0.00';
  tot: string = '0.00';

  @ViewChild(FormComponent) form?: FormComponent;

  submit(event: {bill: number, tip: number, nrOfPeople: number}) {
      let tipPP  = event.bill * event.tip / 100 / event.nrOfPeople;
      this.tot = (Math.round((event.bill / event.nrOfPeople + tipPP) * 100) / 100).toString();
      this.pp = (Math.round(tipPP * 100) / 100).toString();
  }

  reset() {
    this.pp = '0.00';
    this.tot = '0.00';
    this.form?.reset();
  }

}
