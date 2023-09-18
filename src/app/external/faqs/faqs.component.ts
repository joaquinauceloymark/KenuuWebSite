import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent {
  faqs = [
    {
      question: 'Pregunta 1',
      answer: 'Respuesta 1',
      isOpen: false,
    },
    {
      question: 'Pregunta 2',
      answer: 'Respuesta 2 ',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
