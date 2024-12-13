import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: false,

  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  cardList: any[] = [
    {
      title: 'Champion the mission',
      description: 'We are driven by curiosity and belief to solve cross-border payments pain points globally.',
      image: 'img1',
      color: "#D7ECF1"
    },
    {
      title: 'Be the best',
      description: 'We are open, take appropriate risks, adopt a results-driven approach, and are the best at what we do.',
      image: 'img2',
      color: "#FBDDE2"
    },
    {
      title: 'We work as one',
      description: 'We are creative in solving existing problems and bold in designing a new and better experience for customers.',
      image: 'img3',
      color: "#D7E7F9"
    },
    {
      title: 'Go the extra mile',
      description: 'We deliver beyond what is possible. We make impossible possible.',
      image: 'img4',
      color: "#FEEDDF"
    },
    {
      title: 'Customer first',
      description: 'We are creative in solving existing problems and bold in designing a new and better experience for customers.',
      image: 'img5',
      color: "#D7E7F9",
      gradientColor: "#FCD1D9"
    },
    {
      title: 'Run with it',
      description: 'We are determined, seek challenges, take ownership of tasks, act fast and deliver results.',
      image: 'img6',
      color: "#F2F3F4"
    },
  ];

  getStyles(data: any) {
    if (data?.gradientColor) {
      return {
        'background-image': `linear-gradient(${data.color}, ${data.gradientColor})`
      };
    }
    return {
      'background-color': data.color
    };
  }
}
