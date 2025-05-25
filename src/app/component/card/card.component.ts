import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [FormsModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() id :number=0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() locationSelected: boolean = false;
  @Input() mapToLocation:boolean=false;
  @Input() card:any;

}
