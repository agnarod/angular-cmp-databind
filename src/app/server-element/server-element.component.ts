import { Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  @Input('server') element : { type:string, name:string , content: string};

  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;
  constructor(){

  }

  ngOnInit(){

  }

}
