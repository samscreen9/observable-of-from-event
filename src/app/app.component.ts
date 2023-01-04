import { Component, VERSION } from '@angular/core';
import{Observable,of,from,fromEvent} from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(){

  }
   source = of(1, 2, 3, 4, 5);
   subscribe = this.source.subscribe(val => console.log(val));

   source2 =from([1,2,3,4,5,6,7]);
   subscribe2=this.source.subscribe(
     (data)=>{console.log}
   )

}


