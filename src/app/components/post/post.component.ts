import { Component, ElementRef, Input, OnInit,ViewChild } from '@angular/core';
import { Post } from 'src/app/Post';
import { data } from 'src/app/data';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @ViewChild('moreOptions') moreOptions !: ElementRef;
  showMoreOptions: boolean = false;

  @Input() post !: Post ;
  icon!: string;

  constructor() {
    
   }

  ngOnInit(): void {
    switch(this.post.type)
    {
      case "Article": this.icon="✍️";break;
      case "Education": this.icon="🔬";break;
      case "Meetup": this.icon="📅";break;
      case "Job": this.icon="💼";break;
    }
  }

  showMore(){
    this.showMoreOptions = ! this.showMoreOptions;
  }

  onClickedOutside(e: Event)
  {
    this.showMoreOptions = false;
  }

}
