import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-createdrive',
  templateUrl: './createdrive.component.html',
  styleUrls: ['./createdrive.component.css']
})
export class CreatedriveComponent implements OnInit {

  
   driveform:FormGroup;
    
  ngOnInit()
  {
    this.driveform=new FormGroup({
    company_name:new FormControl('',[Validators.required]),
    gstnumber:new FormControl('',[Validators.required,Validators.pattern("[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Z]{1}[0-9a-zA-Z]{1}")]),
    noofresourses: new FormControl('',[Validators.required]),
    exp_required:new FormControl('',[Validators.required]),
    ctc:new FormControl('',[Validators.required]),
    wposition:new FormControl('',[Validators.required]),
    joining_criteria:new FormControl('',[Validators.required]),
    edu_crt:new FormControl('',[Validators.required]),
    follow_up: new FormControl('',[Validators.required]),
    bond:new FormControl('',[Validators.required]),
    
    });
  }
  constructor(private _rservice:RegisterService){}
temp;
  submit() {
   console.log(this.driveform.value);
      this._rservice.register(this.driveform.value).subscribe((e)=>this.temp=e);
      
      
    }
}
