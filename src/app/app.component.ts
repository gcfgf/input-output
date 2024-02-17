import { Component, EventEmitter, Input, Output, ViewChild, input } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 val!:string

 messageToChild!:string
value!:string
inputName=" "

transfer(value:any){
  
  this.inputName = value
 }

 received(str:string){
this.val = str
}

reset(){
  this.inputName=''
  this.value = ''
}
}
