import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import{RegisterService} from '../register.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Registrationform:FormGroup;
  constructor(private rservice:RegisterService,private r:Router) { }

  ngOnInit() {

    this.Registrationform=new FormGroup({
      firstname:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(5)]),
      
     
      
  });

}
temp;
submit() {
  console.log(this.Registrationform.value);
  this.rservice.signup(this.Registrationform.value).subscribe((e:any)=>
  {
    this.temp=e;
    
    if(this.temp.Data =="succesfully register")
     {
       alert('Registeration has Successfully done');
         this.r.navigate(['/login'])
     }
     else{
         alert('registration failed');
     }
    });
}
}