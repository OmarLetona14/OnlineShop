import { Component, OnInit } from '@angular/core';
import { Recovery } from 'src/app/models/recovery';
import { EmailsenderService } from 'src/app/services/emailsender.service';
import { UservalidationService } from 'src/app/services/uservalidation.service';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {

  recovery:Recovery = {
    idsystemuser:"",
    email:""
  }

  constructor(private uservalidationService:UservalidationService,
    private emailService:EmailsenderService) { }

  ngOnInit(): void {
  }

  send(){
    delete this.recovery.idsystemuser;
    this.uservalidationService.getUserByEmail(this.recovery).subscribe(
      res =>{
        console.log(res)
        if (res[0]!=null){
          this.recovery.idsystemuser = res[0].IDSYSTEMUSER;
          this.emailService.sendEmail(this.recovery).subscribe(
            res =>{
              console.log(res);
              this.createAlertSuccess();
            },
            err =>{
              console.error(err);
            }
          );
        }else{
          this.createAlertError();
        }
      },
      err =>{
        console.error(err);
      }
    );
  }

  createAlertError(){
    let alt = document.getElementById('alert_send');
    if (alt.childElementCount < 1){
        let alert_nocredentials = document.createElement('div')
      let strong = document.createElement('strong')
      let btn = document.createElement('button')
      let span = document.createElement('span');
      span.setAttribute('aria-hidden', 'true');
      btn.addEventListener("click", ()=>{
        const container = document.getElementById('alert_send');
        while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
      });
      span.textContent = 'x'
      btn.setAttribute('class', 'close');
      btn.setAttribute('data-dismiss','alert');
      btn.setAttribute('aria-label', 'Close');
      btn.appendChild(span)
      strong.textContent = 'El correo ingresado no esta asociado a ninguna cuenta'
      alert_nocredentials.setAttribute('class', 'alert alert-danger alert-dismissible fade show')
      alert_nocredentials.setAttribute('role','alert')
      alert_nocredentials.appendChild(strong)
      alert_nocredentials.appendChild(btn)
      alt.appendChild(alert_nocredentials)
    }
  }

  createAlertSuccess(){
    let alt = document.getElementById('alert_send');
    if (alt.childElementCount < 1){
        let alert_nocredentials = document.createElement('div')
      let strong = document.createElement('strong')
      let btn = document.createElement('button')
      let span = document.createElement('span');
      span.setAttribute('aria-hidden', 'true');
      btn.addEventListener("click", ()=>{
        const container = document.getElementById('alert_send');
        while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
      });
      span.textContent = 'x'
      btn.setAttribute('class', 'close');
      btn.setAttribute('data-dismiss','alert');
      btn.setAttribute('aria-label', 'Close');
      btn.appendChild(span)
      strong.textContent = 'Se envio el correo a su buzon.'
      alert_nocredentials.setAttribute('class', 'alert alert-success alert-dismissible fade show')
      alert_nocredentials.setAttribute('role','alert')
      alert_nocredentials.appendChild(strong)
      alert_nocredentials.appendChild(btn)
      alt.appendChild(alert_nocredentials)
    }
  }

}
