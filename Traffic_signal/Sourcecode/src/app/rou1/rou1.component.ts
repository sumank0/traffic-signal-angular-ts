import { Component, setTestabilityGetter } from '@angular/core';

@Component({
  selector: 'app-rou1',
  templateUrl: './rou1.component.html',
  styleUrls: ['./rou1.component.css']
})
export class Rou1Component {

    r:string="rgb(232, 155, 155)";
    g:string="rgb(150, 237, 150)";
    y:string="rgb(232, 230, 140)";
    timer:number=3000;
    msg:string="";
    demo(){
      
        setTimeout(() => {
          this.r="red";
          this.y="rgb(232, 230, 140)";
          this.g="rgb(150, 237, 150)";
          this.msg="STOP";
        }, this.timer);
        setTimeout(() => {
          this.r="rgb(232, 155, 155)";
          this.y="yellow"
          this.g="rgb(150, 237, 150)";
          this.msg="GET READY";
        }, this.timer+3000);
        setTimeout(() => {
          this.r="rgb(232, 155, 155)";
          this.y="rgb(232, 230, 140)";
          this.msg="GO";
          this.g="green";
        }, this.timer+6000);
        setTimeout(() => {
          this.demo()
        }, this.timer+6000);
      }
    }
  