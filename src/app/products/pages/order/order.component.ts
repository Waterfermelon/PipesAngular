import { Component } from '@angular/core';
import { Album, Color } from '../../interfaces/album.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase:boolean = false;
  public sortBy?: keyof Album; 

  public albums: Album[] = [
    {
      name: 'Midnights',
      owned: true,
      color: Color.blue
    },
    {
      name: 'Debut',
      owned: false,
      color: Color.green
    },
    {
      name: 'Reputation',
      owned: false,
      color: Color.black
    },
    {
      name: 'RED',
      owned: true,
      color: Color.red
    }
  ]

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Album):void{
    this.sortBy = value;
  }
}
