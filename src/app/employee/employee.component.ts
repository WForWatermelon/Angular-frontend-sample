import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {HttpClientService} from '../httpclient.service';
import {MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import {NewDialogComponent} from '../new-dialog/new-dialog.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Array<any>;
  emailFormControl = new FormControl('', [
    Validators.required
  ]);
  add:FormGroup;
  editClicked: boolean = false;
  displayedColumns: string[] = ['position', 'name', 'salary', 'empID', 'action'];
  index = 0;
  dataSource = this.employees;


  constructor(private httpclient: HttpClientService, public snackBar: MatSnackBar, private formBuilder: FormBuilder, public dialog: MatDialog) { }
  ngOnInit() {
    this.httpclient.getEmployees().subscribe(data => {
      this.employees = data; });
    this.add = this.formBuilder.group({
      "empID": new FormControl(0),
      "name": new FormControl(''),
      "salary": new FormControl(0)
    });
  }

  onSubmit() {
      console.log('test');
      console.log(this.add);
      this.httpclient.addEmployees(this.add.getRawValue()).subscribe(
        object => {
          console.log(object);
          console.log(object["response"]);
          this.refresh();
          this.snackBar.open(object["response"], 'Dismiss',
            {
              duration: 7000
            });
        }, error => {
          console.log(error);
          this.snackBar.open('Something went wrong, try again!', 'Dismiss',
            {
              duration: 5000
            });
        }
      );
  }

  onDelete(id: any) {
    this.httpclient.deleteEmployees(id).subscribe(
      response => {
        console.log(response);
        this.refresh();
        this.snackBar.open(response["response"], 'Dismiss',
          {
            duration: 7000
          });
      }, error => {
        console.log(error);
        this.snackBar.open('Something went wrong, try again!', 'Dismiss',
          {
            duration: 5000
          });
      }
    );
    console.log('delete Works!');
    console.log(id);
  }
  onEdit() {
    this.editClicked = true;
  }
  openDialog(details: any): void {
    const dialogRef = this.dialog.open(NewDialogComponent, {
      width: '50%',
      data: {name: details.name, empID: details.empID, salary: details.salary}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
      console.log('The dialog was closed');
    });
  }



  refresh() {
    this.httpclient.getEmployees().subscribe(data => {
      this.employees = data; });
  }



}


