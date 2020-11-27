import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //passing values from parent to child
  master : String="Type here to send and get data from Parent to Child";
  
  //Getting value from child
  childToParent(name){
    this.master=name;
  }

}
