import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {HttpClientService} from '../httpclient.service';

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.css']
})
export class NewDialogComponent implements OnInit {
  edit: FormGroup;
  constructor(public dialogRef: MatDialogRef<NewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private httpclient: HttpClientService, public snackBar: MatSnackBar ) { }

  ngOnInit() {

    this.edit = this.formBuilder.group({
      empID: new FormControl({value: this.data.empID, disabled: true}),
      name: new FormControl(this.data.name),
      salary: new FormControl(this.data.salary)
    });

  }
  onSubmit() {
    console.log('test');
    console.log(this.edit);
    this.httpclient.updateEmployees(this.edit.getRawValue()).subscribe(
      response => {
        console.log(response);
        this.snackBar.open(response.response, 'Dismiss',
          {
            duration: 5000
          });
      },
      error => {
        console.log(error);
        this.snackBar.open('Something went wrong, try again!', 'Dismiss',
          {
            duration: 5000
          });
      }
    );
  }

}
