import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCard,
  MatCardModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatTabsModule,
  MatTableModule, MatSnackBarModule,
  MatDialogModule
} from '@angular/material';
import { NewDialogComponent } from './new-dialog/new-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NewDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  entryComponents: [NewDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
