import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { BOOKS } from '../../mock-books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = BOOKS;
  constructor() { }
  //Méthode de stockage des données

  getBooks(): Book[] {
    return this.books
  }
}
