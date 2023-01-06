import { Component, VERSION } from '@angular/core';
import { OnInit } from '@angular/core';
import {
  Observable,
  of,
  from,
  fromEvent,
  interval,
  Subject,
  Subscription,
} from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  subscription: Subscription;
  constructor() {}

  ngOnInit() {
    /* of */
    let source1 = of(1, 2, 3, 4, 5);
    let subscribe1 = source1.subscribe((val) => console.log(val));

    /* from */
    let source2 = from([1, 2, 3, 4, 5, 6, 7]);
    let subscribe2 = source2.subscribe((data) => {
      console.log(data);
    });

    /* fromEvent */
    fromEvent(
      document.getElementById('btn1') as HTMLButtonElement,
      'click'
    ).subscribe((event) => console.log(event));

    /* promise */
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('data0');
        resolve('data2');
      }, 1000);
    });
    let po = from(promise);
    po.subscribe((data) => {
      console.log(data);
    });

    /* observable with interval */
    let itvr = interval(1200);
    this.subscription = itvr.subscribe((data) => {
      console.log(data);
      this.addtoList(data, 'unorderedList');
      if (data > 2) {
        this.subscription.unsubscribe();
      }
    });
    /* timer is same as interval except it takes first parameter as delay to start interval let x=timer(2000,1000)  timer(delay,interval) */

    /* custom observable with i */
    let obs3 = new Observable((observer) => {
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          observer.next(i);
        }, i * 1000);
      }
    });
    obs3.subscribe((data) => {
      console.log(data + ' ' + 'obs3');
    });

    /* subject */
    let obs4 = of(11, 12, 13, 14);
    let s = new Subject<number>();

    obs4.subscribe((data) => {
      console.log(data + ' ' + 'no subject 1');
    });
    obs4.subscribe((data) => {
      console.log(data + ' ' + 'no subject 2');
    });
    console.log('no subject method starts here');

    let s1 = s.subscribe((data) => {
      console.log(data + ' ' + 'with subject');
    });

    let s2 = s.subscribe((data) => {
      console.log(data + ' ' + 'with subject');
    });

    obs4.subscribe(s);
    //s.next(1);s.next(2);
  }

  /*utilty function to create child nodes for ul*/
  addtoList(item, appendto) {
    let li = document.createElement('li');
    li.textContent = item;
    let ap = document.getElementById(appendto);
    ap.appendChild(li);
  }
}
