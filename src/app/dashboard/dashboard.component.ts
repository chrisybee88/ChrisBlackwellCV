import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cbcv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log("%c Checkout the source code of Chris Blackwell's CV !!", 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

    var code = prompt("Please enter your share code:");
    var awesome = "Architect";
    var fun = "Rox";
    var d = new Date().getFullYear();

    if(code === awesome + fun + d.toString()){
        (document.querySelector('.doc2') as HTMLElement).style.display = "block";
    }
    else{
        alert("View console output for error details")
    }
  }

}
