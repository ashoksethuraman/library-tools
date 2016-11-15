import {Component} from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'demo-app',
  template:`
  <h1>Angular2 HTTP applications</h1>
  <h2>From GET  API </h2>
  <ul> 
  <li *ngFor="let book of foods">{{book.name}}</li>
    
  </ul>`
})
export class AppComponent {

  public foods;
  public books;
  public movies;

  public food_name;

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.getFoods();
    
  }

  getFoods() {
    this._demoService.getFoods().subscribe(
                                      data => {this.foods = data.results}, 
                                      err => console.error(err),      
                                      () => console.log(this.foods));
     }

  

 

}
