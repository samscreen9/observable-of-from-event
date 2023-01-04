import { Component, VERSION } from '@angular/core';
import {  OnInit } from '@angular/core';
import{Observable,of,from,fromEvent} from 'rxjs';
import{map} from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  constructor(){}

  ngOnInit() {
   let source1 = of(1, 2, 3, 4, 5);
   let subscribe1 = source1.subscribe(val => console.log(val));

   let source2 =from([1,2,3,4,5,6,7]);
   let subscribe2=source2.subscribe(
     (data)=>{console.log(data)}
   )

    let buttonStream$ = fromEvent(document.querySelector('#btn1')! as HTMLButtonElement, 'click')
        .subscribe(event => console.log(event));

  }
   
}



