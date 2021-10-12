import {Component, ViewChild} from '@angular/core';
import {FormComponent} from "./form/form.component";
import {ResultComponent} from "./result/result.component";

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
    console.log(event);
  }

}
