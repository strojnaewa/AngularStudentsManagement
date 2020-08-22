import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentNewComponent } from './Student-new/student-new.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentEditComponent,
    NotFoundComponent,
    StudentNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]




})
export class AppModule { }
