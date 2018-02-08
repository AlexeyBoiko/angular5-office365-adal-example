import { Component, OnInit } from '@angular/core';
import { AdalService } from './data-access-layer/adal.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private adalSrv:AdalService){}
  ngOnInit() {
    this.adalSrv.context.handleWindowCallback();
  }
}
