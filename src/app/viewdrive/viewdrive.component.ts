import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import{MatDialog} from '@angular/material';
import { UpdatedriveComponent } from '../updatedrive/updatedrive.component';
import {MatTableDataSource} from '@angular/material/table';

export interface DialogData{
  did:number;
  company_name:string;
  noofresourses:number;
  exp_required:number;
  ctc:number;
  wposition:any;
  joining_criteria:any;
  edu_crt:any;
  follow_up:any;
  bond:any;
  gstnumber:any;
}



@Component({
  selector: 'app-viewdrive',
  templateUrl: './viewdrive.component.html',
  styleUrls: ['./viewdrive.component.css']
})
export class ViewdriveComponent implements OnInit {

  emparr:any[];
  displayedColumns: string[] = ['CompanyName','No.Of Resources','Exp Required','CTC','Position','Joining Criteria','Education Criteria','Followp','Bond','GST Number','update','delete'];
  
 
  
  
  constructor(private rservice : RegisterService, public dialog: MatDialog) { }
   
  ngOnInit() {

   this.user();

  }

  

   user()
   {
    this.rservice.data().subscribe((e:any)=>{
      return this.emparr=e
    });
   }

  did;
   company_name;
   noofresourses;
   exp_required;
   ctc;
   wposition;
   joining_criteria;
   edu_crt;
   follow_up;
   bond;
   gstnumber;
    
  edit(i)
  {
    this.did=i.did;
  this.company_name=i.company_name;
  this.noofresourses=i.noofresourses
    this.exp_required=i.exp_required
   this. ctc=i.ctc;
    this.wposition=i.wposition;
    this.joining_criteria=i.joining_criteria;
   this. edu_crt=i.edu_crt;
    this.follow_up=i.follow_up;
    this.bond=i.bond;
    this.gstnumber=i.gstnumber;
    
  }
  
   openDialog() {
    const dialogRef = this.dialog.open(UpdatedriveComponent,{

      data:{did:this.did,
        company_name:this.company_name,
        noofresourses:this.noofresourses,
        exp_required:this.exp_required,
        ctc:this.ctc,
        wposition:this.wposition,
        joining_criteria:this.joining_criteria,
        edu_crt:this.edu_crt,
        follow_up:this.follow_up,
        bond:this.bond ,
      gstnumber:this.gstnumber}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
     this.user();
    });
  }

  delete(x)
  {
   
    this.rservice.deletedata(x).subscribe((e:any)=>{
      this.user();
    });
    
  }
  company:any="";
  serch(x)
  {
     console.log(x.value);
     this.company=x.value;
  }

  
}
  



