import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params
  }

}
