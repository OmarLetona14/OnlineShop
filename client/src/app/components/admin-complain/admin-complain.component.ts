import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recovery } from 'src/app/models/recovery';
import { ComplainService } from 'src/app/services/complain.service';
import { EmailcomplainService } from 'src/app/services/emailcomplain.service';

@Component({
  selector: 'app-admin-complain',
  templateUrl: './admin-complain.component.html',
  styleUrls: ['./admin-complain.component.css']
})
export class AdminComplainComponent {

  constructor(private complainsService:ComplainService, private router:Router,
    private emailComplainService:EmailcomplainService) { }

  complains:any = [];
  empty:boolean = false;
  recovery:Recovery={
    idsystemuser:"",
    email:""
  };

  ngOnInit(): void {
    this.getComplains()
    if(this.complains.length > 1){
      this.empty = true;
    }
  }

  createAlertComplain(){
    let alt = document.getElementById('alert_checked');
    if (alt.childElementCount < 1){
        let alert_nocredentials = document.createElement('div')
      let strong = document.createElement('strong')
      let btn = document.createElement('button')
      let span = document.createElement('span');
      span.setAttribute('aria-hidden', 'true');
      btn.addEventListener("click", ()=>{
        const container = document.getElementById('alert_checked');
        while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
      });
      span.textContent = 'x'
      btn.setAttribute('class', 'close');
      btn.setAttribute('data-dismiss','alert');
      btn.setAttribute('aria-label', 'Close');
      btn.appendChild(span)
      strong.textContent = 'Se bloqueo esta publicacion'
      alert_nocredentials.setAttribute('class', 'alert alert-success alert-dismissible fade show')
      alert_nocredentials.setAttribute('role','alert')
      alert_nocredentials.appendChild(strong)
      alert_nocredentials.appendChild(btn)
      alt.appendChild(alert_nocredentials)
    }
  }

  getComplains(){
    this.complainsService.getComplains().subscribe(
      res =>{
        this.complains = res;
        this.router.navigate(['/complains'])
      },
      err =>{
        console.error(err);
      }
    );
  }

  acceptComplain(id:string, email:string){
    this.complainsService.acceptComplain(id).subscribe(
      res=>{
        delete this.recovery.idsystemuser;
        this.recovery.email = email;
        this.emailComplainService.sendComplainEmail(this.recovery).subscribe(
          res => {
            console.log(res);
            window.location.replace('/complains')
          },
          err =>{
            console.error(err);
          }
        );
      },
      err=>{
        console.error(err);
      }
    )
  }

}
