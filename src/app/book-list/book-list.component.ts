import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/book';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit{

  books?:Book [];
  constructor(private Bookservice:BooksService){}
  ngOnInit(): void {
    this.books = this.Bookservice.getBooks()
  }
  // books:Book[] = [

  // ];
}
