import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
 
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text Content : ' + this.header.nativeElement.textContent);
  }
  
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges called');
    console.log(changes);
  }

  constructor() { 
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content : ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }


}
