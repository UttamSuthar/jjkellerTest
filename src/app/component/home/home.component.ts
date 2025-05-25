import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";
import { LocationService } from '../../service/location.service';
import { ProgramTypesService } from '../../service/program-types.service';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, CardComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private locationService: LocationService, private programs: ProgramTypesService) { }
  locations: any;
  cards: any[] = [];
  allCards: any[] = [];
  selectedCount: number = 0;
  locationProgramMap: { locationId: string; mappedProgram: number[] }[] = [];
  addEditMode: boolean = false;
  selectedCard: any;
  showModal: boolean = false;
  ngOnInit() {
    this.locationService.getLocation().subscribe((data) => {
      this.locations = data;
    });

    this.programs.getPrograms().subscribe((data) => {
      this.cards = data;
      this.allCards = data;
    });
    //Default Selection:
    var selLocMap =
    {
      locationId: "1",
      mappedProgram: [1, 4]
    };
    var selLocMap2 =
    {
      locationId: "2",
      mappedProgram: [2, 7, 9]
    };
    this.locationProgramMap.push(selLocMap);
    this.locationProgramMap.push(selLocMap2);
    //**************** */

  }
  selectedLocation: string = '0';

  onLocationChange(event: string) {
    this.addEditMode = false;
    console.log('Selected location:', this.selectedLocation);

    this.selectedDeSelectedPrograms();
    if (this.selectedLocation != '0') {
      this.cards = this.cards.filter(a => a.selected == true);
    }

    this.selectedCount = this.cards.filter(a => a.selected == true).length;
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

  addEditProgramFunction() {
    this.addEditMode = true;
    this.cards = this.allCards;

  }

  handleAddEdit(cardDetails: any) {
    this.selectedCard = cardDetails;
    if (cardDetails.add) {
      this.showModal = false;
      this.handleAddEditOpertion(cardDetails);
    }
    else {
      this.showModal = true;
    }
  }
  handleAddEditOpertion(cardDetails: any) {
    //add edit from mapped programs.
    var mapping = this.locationProgramMap.find(
      (lp) => lp.locationId === this.selectedLocation
    );
    if (mapping) {
      this.locationProgramMap.forEach((a) => {
        if (a.locationId == this.selectedLocation) {
          if (cardDetails.add) {
            a.mappedProgram.push(cardDetails.cardId);
          }
          else {
            const index = a.mappedProgram.indexOf(cardDetails.cardId);
            if (index > -1) {
              a.mappedProgram.splice(index, 1); // toggles off
            }
          }
        }
      });
    }
    else {
      //new add
      var selLocMap =
      {
        locationId: this.selectedLocation,
        mappedProgram: [cardDetails.cardId]
      };
      this.locationProgramMap.push(selLocMap);
      mapping=selLocMap;
    }

    // update cards UI,
    this.allCards = this.allCards.map((card: any) => {
      if (mapping && mapping.mappedProgram.includes(card.id)) {
        return { ...card, selected: true };
      } else {
        return { ...card, selected: false };
      }
    });
    this.cards = this.allCards;
  }
  onCancelEvent() {
    this.showModal = false;
  }
  
  onDeleteEvent() {
    this.handleAddEditOpertion(this.selectedCard);
    this.showModal = false;
  }
  showDashboard() {
    this.addEditMode = false;
    this.selectedDeSelectedPrograms();
    if (this.selectedLocation != '0') {
      this.cards = this.cards.filter(a => a.selected == true);
    }
  }
  selectedDeSelectedPrograms() {
    const mapping = this.locationProgramMap.find(
      (lp) => lp.locationId === this.selectedLocation
    );

    // Update all cards as selected
    this.cards = this.allCards;
    this.allCards = this.allCards.map((card: any) => {
      if (mapping && mapping.mappedProgram.includes(card.id)) {
        return { ...card, selected: true };
      } else {
        return { ...card, selected: false };
      }
    });
    this.cards = this.allCards;
  }
}
