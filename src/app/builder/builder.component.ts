import { Component, OnInit } from '@angular/core';
import {ConcreteBuilder1, Director } from './implementation/builder';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const director = new Director();
    this.clientCode(director);
  }

  public clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalAboutUser();
    builder.getProduct().showUserInfo();

    console.log('Standard full featured product:');
    director.buildFullAboutUser();
    builder.getProduct().showUserInfo();
  }

}
