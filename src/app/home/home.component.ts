import { Component, OnInit } from '@angular/core';


  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    
  }
  
 
  ngOnInit(): void {
  }
  home= [
    {'id':1,'name':'Who we are:','description':'Our main goal is to drive South Africa to becoming a more sustainable and eco-friendlier environment.','image':'../../assets/inyathi-waste.png'},
    {'id':2,'name':'How we operate:','description':'We provide intuitive waste management solutions to all sectors of the economy, including residential, commercial and industrial sectors.','image':'../../assets/home-page (1).jpg'},
    {'id':3,'name':'Why recycle?','description':'We encourage more efficient recycling to provide a greener environment for all.','image':'../../assets/home-page2 (1).jpg'},
    //{'id':4,'name':'Heading','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/logo.JPG'},
  ]

}
