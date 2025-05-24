import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramTypesService {

   constructor() { }
    getPrograms(): Observable<any[]> {
    
    var programs = [
  {
    title: 'Air',
    description: 'Air regulations apply to emissions from factories, power plants, and heavy-duty equipment. These rules aim to reduce pollutants and improve air quality.',
    imageUrl: 'assets/images/tempImage.jpeg'
  },
  {
    title: 'Spill Prevention, Control & Countermeasure (SPCC)',
    description: 'The SPCC rule focuses on oil spill prevention, requiring facilities to have plans in place to prevent and contain oil discharges into navigable waters.',
    imageUrl: 'assets/images/tempImage.jpeg'
  },
  {
    title: 'Toxic Release Inventory (TRI)',
    description: 'The TRI program tracks the management of specific toxic chemicals that may pose a threat to human health or the environment when handled improperly.',
    imageUrl: 'assets/images/tempImage.jpeg'
  },
  {
    title: 'Specific Industrial User (SIU)',
    description: 'Applies to industries discharging into municipal sewer systems. SIUs must comply with pretreatment standards to prevent harm to treatment facilities.',
    imageUrl: 'assets/images/tempImage.jpeg'
  },
  {
    title: 'Stormwater Pollution Prevention',
    description: 'Programs that manage runoff from industrial sites and construction areas, minimizing pollutants entering local water bodies.',
    imageUrl: 'assets/images/tempImage.jpeg'
  },
  {
    title: 'Hazardous Waste Management',
    description: 'Covers the storage, treatment, and disposal of hazardous wastes to ensure safe handling and compliance with RCRA regulations.',
    imageUrl: 'assets/images/tempImage.jpeg'
  },
  {
    title: 'Underground Storage Tanks (UST)',
    description: 'Regulates tanks storing petroleum or hazardous substances underground to prevent leaks and contamination of soil and groundwater.',
    imageUrl: 'assets/images/tempImage.jpeg'
  },
  {
    title: 'Universal Waste',
    description: 'Handles common hazardous wastes like batteries, lamps, and mercury devices to streamline recycling and disposal.',
    imageUrl: 'assets/images/tempImage.jpeg'
  },
  {
    title: 'EPCRA Tier II Reporting',
    description: 'Facilities must report hazardous chemical storage to local emergency authorities to support emergency planning and community right-to-know.',
    imageUrl: 'assets/images/tempImage.jpeg'
  },
  {
    title: 'Air Permit Compliance',
    description: 'Ensures facilities with air permits are meeting emissions limits, recordkeeping, and reporting requirements.',
    imageUrl: 'assets/images/tempImage.jpeg'
  },
  {
    title: 'Environmental Training Programs',
    description: 'Employee training required by environmental regulations to ensure proper handling of hazardous materials and emergency procedures.',
    imageUrl: 'assets/images/tempImage.jpeg'
  }
];


    return of(programs); // Using RxJS 'of' to simulate an observable
  }
  
     
}
