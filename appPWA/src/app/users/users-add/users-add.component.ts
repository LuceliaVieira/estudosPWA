import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ReqresServiceService } from '../../service/reqresService.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;
  qnt: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: ReqresServiceService,
    private router: Router
    ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      id: [ null ],
      email: [null, [Validators.required, Validators.email]],
      first_name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      last_name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      avatar: "https://via.placeholder.com/128"
    });

  }

  onSubmit(){
    this.submitted = true;

    if(this.form.valid){
      this.service.create(this.form.value).subscribe(
        success => console.log('User added successfully.!!'),
        error => console.log('Error adding user. Try again later. :(')
        );
      }
  }

  verificar(){
    
  }


  onCancel(){
    this.submitted = false;
    this.form.reset();

    this.router.navigate(['/user/'])
  }


}
