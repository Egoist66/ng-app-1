import { Component, Input } from '@angular/core';
interface IHeaderComponent {
  name: string
}

@Component({
  selector: 'app-header',
  standalone: true,
  inputs: ['_id'],
  outputs: [],
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})



@Input()
export class HeaderComponent implements IHeaderComponent {
  public name: string = 'EasyTask'
  public _id: string = ''
  
  constructor() {
    console.log(this._id)
  }

}


