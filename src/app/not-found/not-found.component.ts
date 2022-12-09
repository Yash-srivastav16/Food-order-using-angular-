import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{
  
  
  @Input() visible:boolean=false;
  @Input() notFoundMessage:string='Nothing Found!';
  @Input() resetLinkText:string='Reset';
  @Input() resetLinkRoute:string='/';
  //above Variable can be used anywhere now becaues of @INPUT()
  constructor(){}
  ngOnInit(): void {
    
  }

}
