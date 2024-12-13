import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: false,
  
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  infoList: any[] = [
    { heading: '170+', description: 'Countries from which you can accept payments' },
    { heading: '40+', description: 'countries where you can open accounts with local bank details' },
    { heading: '10B+', description: 'Global payments processed annually' },
    { heading: '30%', description: 'Processing time for transaction cutdown, boosting productivity.' },
    { heading: '40%', description: 'Reduction in cross-border payments costs, increasing profitability.' },
  ];
}
