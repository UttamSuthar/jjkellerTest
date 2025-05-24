import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { LocationService } from '../../service/location.service';
import { ProgramTypesService } from '../../service/program-types.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private locationService: LocationService,private programs:ProgramTypesService) {}
locations:any;
cards:any;
ngOnInit()
{
  this.locationService.getLocation().subscribe((data) => {
      this.locations = data;
    });

    this.programs.getPrograms().subscribe((data)=>{
      this.cards=data;
    });
}
selectedLocation: string = '0';
  
  onLocationChange(event: any) {
    console.log('Selected location:', this.selectedLocation);
  }
}
