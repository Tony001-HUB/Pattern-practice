import {Component, OnInit} from '@angular/core';
import {User} from "./singleton/implementation/ singleton";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice-patterns';

  ngOnInit(): void {
    const s3 = User.getInstance();
    s3.age = 10;
    s3.name = 'Anton12345'
    console.log(s3)
  }
}
