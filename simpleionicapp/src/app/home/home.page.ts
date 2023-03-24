import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   constructor(){}

    myVariable: string = "The forces is with me!";
    myVariable2: string = "Hi CCT";

    updateMyValue(){
      this.myVariable = "Now the new force is even stronger!";
    }

    updateMyValue2(){
      this.myVariable2 = "Hello from Ionic Web Development ";
    }
  

}
