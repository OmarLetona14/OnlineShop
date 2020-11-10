import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent {

  logs:any = [];
  constructor(private logService:LogService) { }

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs(){
    this.logService.getLogs().subscribe(
      res =>{
        this.logs = res;
      },
      err =>{
        console.error(err);
      }
    );
  }

}
