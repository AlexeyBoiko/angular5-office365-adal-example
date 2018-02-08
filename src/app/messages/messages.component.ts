import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../data-access-layer/repository.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private rep:RepositoryService) { }

  ngOnInit() {   
    this.messagesList();
  }

  private messagesList(){
    this.rep.messagesList().subscribe(
      msgs => console.log(msgs), 
      err => console.log(err));
  }

}
 