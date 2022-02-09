import { Component, OnInit } from '@angular/core';
import {User} from "./implementation/ singleton";

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const s1 = User.getInstance();
    const s2 = User.getInstance();
    s1.age = 10;
    s2.name = 'Anton'

    if (s1 === s2) {
      console.log('Singleton works, both variables contain the same instance.');
      console.log(s1)
    } else {
      console.log('Singleton failed, variables contain different instances.');
    }
  }

}
