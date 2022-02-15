import { Component, OnInit } from '@angular/core';
import {BMWRelease, Creator, MazdaRelease} from './implementation/factoryMethod';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css']
})
export class FactoryMethodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    function clientCode(creator: Creator) {
      console.log(creator.someOperation());
    }
    clientCode(new BMWRelease());
    clientCode(new MazdaRelease());
  }

}
