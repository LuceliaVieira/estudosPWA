import { Component, OnInit } from '@angular/core';

import { ReqresServiceService } from '../service/reqresService.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: any;

  constructor(private service: ReqresServiceService) { }

  ngOnInit() {
    this.listUser();
  }

  listUser(){
    this.service.list()
    .subscribe(data => this.user = data);
  }

}
