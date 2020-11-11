import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  report_type:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  generateReport(){
    console.log(this.report_type)
    switch(this.report_type){
      case "Reporte de bitacora":{
        this.router.navigate(['/log']);
        break;
      }
    }
  }

}
