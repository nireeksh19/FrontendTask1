import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-secondary',
  templateUrl: './nav-secondary.component.html',
  styleUrls: ['./nav-secondary.component.css']
})
export class NavSecondaryComponent implements OnInit {
  @ViewChild('join') join!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  leave(){
    const text = this.join.nativeElement.innerText;
    if(text == "Leave Group")
      {this.join.nativeElement.innerText = "Join Group";
    this.join.nativeElement.classList.add('joinactive')}
    else
      {this.join.nativeElement.innerText = "Leave Group";
    this.join.nativeElement.classList.remove('joinactive')
  }
  
  }
  }
