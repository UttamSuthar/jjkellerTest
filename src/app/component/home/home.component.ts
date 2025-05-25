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
cards:any[]=[];
selectedCount:number=0;
locationProgramMap: { locationId: string; mappedProgram: number[] }[] = [];
ngOnInit()
{
  this.locationService.getLocation().subscribe((data) => {
      this.locations = data;
    });

    this.programs.getPrograms().subscribe((data)=>{
      this.cards=data;
    });
    //Default Selection:
    var selLocMap=
      {
      locationId:"1",
      mappedProgram:[1,4]
    };
    this.locationProgramMap.push(selLocMap);
    //**************** */

}
selectedLocation: string = '0';
  
  onLocationChange(event: string) {
  console.log('Selected location:', this.selectedLocation);
   
  const mapping = this.locationProgramMap.find(
    (lp) => lp.locationId === this.selectedLocation
  );
  
  // Update all cards as selected
  this.cards = this.cards.map((card: any) => {
    if (mapping && mapping.mappedProgram.includes(card.id)) {
      return { ...card, selected: true };
    } else {
      return { ...card, selected: false };
    }
  });

  this.selectedCount=this.cards.filter(a=>a.selected==true).length;
}

  onProgramSelection(programId: number) {
  const existing = this.locationProgramMap.find(
    (lp) => lp.locationId === this.selectedLocation
  );

  if (existing) {
    // Check if programId is already in the list
    if (!existing.mappedProgram.includes(programId)) {
      existing.mappedProgram.push(programId);
    } else {
      //remove if already selected
      const index = existing.mappedProgram.indexOf(programId);
      if (index > -1) {
        existing.mappedProgram.splice(index, 1); // toggles off
      }
    }
  } else {
    // Add new llsits
    this.locationProgramMap.push({
      locationId: this.selectedLocation,
      mappedProgram: [programId]
    });
  }
}

}
