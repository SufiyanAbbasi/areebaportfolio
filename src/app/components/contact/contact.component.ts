import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactItems = [
    { name: 'Areeba Sajjad', iconUrl: 'assets/images/link.svg', link: 'https://www.linkedin.com/in/areeba-sajjad-13a66432b/' },
    { name: '+92 331 5747723', iconUrl: 'assets/images/call.svg', link: '+92 348 9443688' },
    { name: 'sajjadareeba2001@gmail.com', iconUrl: 'assets/images/email.svg', link: 'sajjadareeba2001@gmail.com' },
  ];
}
