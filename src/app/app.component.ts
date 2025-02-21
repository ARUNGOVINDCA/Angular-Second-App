import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'second-app';

  constructor() {
    // console.log('constructor')
  }

  // ngOnInit() {
  //   console.log('nGOnInit')

  //   // this.changeTitle();
  // }


  changeTitle() {

    this.title = '||The Second APP||';
  }

  
}
