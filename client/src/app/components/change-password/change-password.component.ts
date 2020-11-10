import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordRecovery } from 'src/app/models/passwordRecovery';
import { RecoveryService } from 'src/app/services/recovery.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  pChange:PasswordRecovery = {
    idsystemuser:"",
    password:""
  }

  constructor(private activedRoute:ActivatedRoute, private recoveryService:RecoveryService,
    private router:Router) { }

  ngOnInit(): void {
    
  }

  change(){
    const params = this.activedRoute.snapshot.params
    this.pChange.idsystemuser = params.id;
    this.recoveryService.saveRecovery(this.pChange).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/login']);
      },
      err =>{
        console.error(err);
      }
    );
  }

}
