import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Output() Nagendra = new EventEmitter() 
value!:string;
@Input() nameData!:string;

send(){
  this.Nagendra.emit(this.value)
 
}
reset(){

  this.value = ' ';

  this.Nagendra.emit(this.value='')


}
}

