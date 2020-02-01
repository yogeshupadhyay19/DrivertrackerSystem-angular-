import {Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import{RegisterService} from '../register.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

    username= new FormControl('',[Validators.required,Validators.minLength(5)]);
    password= new FormControl('',[Validators.required,Validators.minLength(5)]);
  
  constructor(private _builder:FormBuilder,private rservice:RegisterService,private r:Router)
  {}
 
  loginform:FormGroup=this._builder.group(
    {
      username:this.username,
      password:this.password,
    });
    
  temp;

  submit() {
    
    console.log(this.loginform.value);

    this.rservice.logindata(this.loginform.value).subscribe((e:any)=>
    {
      this.temp=e;
     if(this.temp.login =="successful")
     {
      
       this.r.navigate(['/Menu'])
     }
     else
     {
      alert('Please Valid Enter Username or Password');
  

     }
    });
   
    
  }
}
  
  


