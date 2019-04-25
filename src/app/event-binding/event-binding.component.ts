import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My button";
  i = 0;
  spinnerMode = "determinate";
  colors = [ 'primary', 'accent', 'warn']
  idx = 0;
  btEnable = true;
  selectDisabled = false;
  selectOption = 1;
  inputName = "John";

  constructor() { }

  ngOnInit() {
    setInterval( () => {
      this.idx = (this.idx+1) % this.colors.length;
    }, 500);
  }

  save() {
    console.log("Click");
  }

  inc() {
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times";
  }

  disable() {
    this.btEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( () => {
      this.btEnable = true;
      this.spinnerMode = "determinate";
    }, 3000);
  }

  cbChange(event) {
    console.log(event.checked);
    this.selectDisabled = event.checked;
  }

  selectionChange(event) {
    console.log(event)
    this.selectOption = event.value;
  }

  // inputEvent(event) {
  //   console.log(event.target.value);
  //   console.log(this.inputName);
  // }

}
