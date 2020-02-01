import { Component, OnInit, Inject } from '@angular/core';
import{FormControl,Validators,FormGroup, FormControlName} from '@angular/forms';
import{MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {RegisterService} from '../register.service';
import{DialogData} from '../viewdrive/viewdrive.component';

@Component({
  selector: 'app-updatedrive',
  templateUrl: './updatedrive.component.html',
  styleUrls: ['./updatedrive.component.css']
})
export class UpdatedriveComponent implements OnInit {

  updateform:FormGroup;
  constructor(private _rservice:RegisterService, public dialogRef:MatDialogRef<UpdatedriveComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) { }
    
  
  ngOnInit()
  {
    this.updateform=new FormGroup({
    did:new FormControl,
    company_name:new FormControl('',[Validators.required]),
    noofresourses: new FormControl('',[Validators.required]),
    exp_required:new FormControl('',[Validators.required]),
    ctc:new FormControl('',[Validators.required]),
    wposition:new FormControl('',[Validators.required]),
    joining_criteria:new FormControl('',[Validators.required]),
    edu_crt:new FormControl('',[Validators.required]),
    follow_up: new FormControl('',[Validators.required]),
    bond:new FormControl('',[Validators.required]),
    gstnumber:new FormControl('',[Validators.required,Validators.pattern("[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Z]{1}[0-9a-zA-Z]{1}")]),
    });
  }
 
temp;
  submit() {
       console.log(this.updateform.value);
       this._rservice.update(this.updateform.value).subscribe((e)=>this.temp=e);
       
    }
}
