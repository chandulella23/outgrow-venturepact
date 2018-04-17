import { Component } from '@angular/core';
import { ScriptService } from './shared/services/script.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private script:ScriptService){}

 ngOnInit()
 {
   this.script.load("index","example").then( (data)=>{
      console.log(data,">>>>>>>");
   })
 }
}

