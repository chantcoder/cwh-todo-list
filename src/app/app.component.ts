import { animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Todo App';
  constructor(){
    
    setTimeout(()=>{
      this.title ="Developed by Palash Tiwari";
    },2000);
    setInterval(()=>{
      this.title = "Guided by Harry Bhai!"
    },4000);
  }
  
}
