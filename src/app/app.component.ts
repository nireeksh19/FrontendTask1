import { Component, ElementRef,ViewChild } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { SigninComponent } from './components/signin/signin.component';
import { data } from './data';
import { Post } from './Post';
import { Group } from './Group';
import { groups } from './groups';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('navigation') navigation!:ElementRef;
  follow:string = "Follow"
  constructor(private dialog:MatDialog){
  } 
  data:Post[] = data;
  groups: Group[] = groups;
  title = 'frontend-task1';
  showsignin(){this.signin();
    const diagRef = new MatDialogConfig()
    diagRef.position = {
      'bottom': '0',
      'left': '0'
    }
    diagRef.minWidth="100%";
    this.dialog.open(SigninComponent,diagRef);
  }
  signin(){
    console.log(this.navigation)
  }
  
}
