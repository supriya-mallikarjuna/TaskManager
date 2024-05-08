import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatListModule,MatIconModule,MatButtonModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
selectedList=""
  @Input() lists: any[] = []; // Input property to receive the list data
  @Output() listSelected = new EventEmitter<any>();

  selectList(list: any): void {
    console.log(list.name)
    this.selectedList=list.name
    // console.log(this.selectedList)
    this.listSelected.emit(list);
  }
}
