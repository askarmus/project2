import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-check-circle',
  templateUrl: './custom-check-circle.component.html',
  styleUrls: ['./custom-check-circle.component.css']
})
export class CustomCheckCircleComponent  {
 
  checkStatus = { status: "unchecked" };

  onStatusChnaged(checkStatus : any) {
     
    switch (checkStatus) {
      case "checked": {
        this.checkStatus.status = "unchecked";
        break;
      }
      case "unchecked": {
        this.checkStatus.status = "crossed";
        break;
      }
      case "crossed": {
        this.checkStatus.status = "checked";
        break;
      }
    }
  }
}
