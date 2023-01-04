import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'my-logger';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'routing-demo';
  ngOnInit()
  {

  }
  constructor(private loggerService: LoggerService){
    this.loggerService.log('hello world');
  }
}