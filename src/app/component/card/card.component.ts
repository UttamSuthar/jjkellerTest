import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() locationSelected: boolean = false;
  @Input() mapToLocation: boolean = false;
  @Input() card: any;
  @Input() addEditMode: boolean = false;
  @Output() addEditFunction = new EventEmitter<any>();

  AddDeleteMethod(add: boolean) {
    //send event to parent commponent so
    // we can update mapped List
      var addEditObj = {
        add: add,
        cardId: this.id,
        title:this.title
      };
      this.addEditFunction.emit(addEditObj);
  }
}
