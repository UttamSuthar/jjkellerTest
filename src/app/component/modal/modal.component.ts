import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = "";
  @Output() onCancelEvent = new EventEmitter<any>();
    @Output() onDeleteEvent = new EventEmitter<any>();
  onCancel() {
    this.onCancelEvent.emit();
  }
  onDelete() { 
    this.onDeleteEvent.emit();
  }
}
