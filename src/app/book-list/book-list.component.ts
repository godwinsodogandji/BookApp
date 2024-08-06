import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {

  books = [
    {
       id: 1,
      title: 'Laravel',
      author: 'Godwin Sdg',
       statut: 'Terminé' },
    {
      id: 2,
      title: 'HTML',
      author: 'Jean-Claude',
      statut: 'En attente',
    },
    {
      id: 3,
      title: 'Tout sur le Javascript',
      author: 'Boss Bms',
      statut: 'Terminé',
    },
    {
      id: 4,
      title: 'CSS',
      author: 'Yannick Emerson',
      statut: 'Terminé',
    },
  ];
}
