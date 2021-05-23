import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  set = [1,2,3];
  reqdSum = 2;

  list: number[] = []

  constructor() {
    if(this.checkSum(0)){
      console.log(this.list)
    } else {
      console.log('no soln')
    }
  }

  checkSum(start: number): any {
    let sumTillNow = this.getSum(this.list);
    if(sumTillNow===this.reqdSum) {
      return true;
    }
    if(start===this.set.length) {
      return false;
    }
    if(sumTillNow>this.reqdSum) {
      return false;
    }

    this.list.push(this.set[start])
    
    if (this.checkSum(start+1)) {
      return true;
    } else {
      this.list.splice(start, 1);
      return this.checkSum(start+1)
    }
  }

   getSum(arr: number[]) {
    return arr.reduce((prev, curr)=> prev+curr , 0);
   }

}
