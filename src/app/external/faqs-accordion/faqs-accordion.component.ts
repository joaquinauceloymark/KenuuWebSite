import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs-accordion',
  templateUrl: './faqs-accordion.component.html',
  styleUrls: ['./faqs-accordion.component.css'],
})
export class FaqsAccordionComponent {
  faqs = [
    {
      question: '¿Lorem ipsum dolor sit amet consectetur?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life.',
    },
  ];
}
