import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <br>
   <h2> Child Component</h2>
    <input type="textbox"[(ngModel)]='masterName'> 
    <button (click)="sendToParent(masterName)" >SendDataToParent</button>
    <div>{{masterName}}</div>
  `
})
export class AppChildComponent {
  //getting value from parent to child
  @Input('childToMaster') masterName: string;

  
  @Output() childToParent = new EventEmitter<String>();  

  sendToParent(name){
    //alert("hello");
    //Using emit to send to parent
    this.childToParent.emit(name);
  }
}
