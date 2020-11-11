import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmService } from 'src/app/services/confirm.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  confirmed:boolean;

  constructor(private activedRoute:ActivatedRoute, private confirmationService:ConfirmService) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params
    this.confirmationService.confirmUser(params.id).subscribe(
      res =>{
        console.log(res);
        this.confirmed = true;
      },
      err =>{
        console.error(err);
      }
    );
  }

}
