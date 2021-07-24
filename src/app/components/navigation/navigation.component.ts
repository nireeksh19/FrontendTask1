import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  drop: boolean = false;
  loggedin:boolean = false;
  @ViewChild('signin') signin!: ElementRef;
  showsignIn:boolean=false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  show(){
    this.drop = ! this.drop;
  }

  hide(){
    this.drop = false;
  }
  opensigup(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(SigninComponent);
    this.show();
  }

}
