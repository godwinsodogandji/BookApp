import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book-header',
  templateUrl: './book-header.component.html',
  styleUrl: './book-header.component.css'
})
export class BookHeaderComponent {
  logo: string = "../assets/logoipsum-317.svg";

  @Output() passValue = new EventEmitter<boolean>();

  affiche: boolean = false;
  toogleForm() {
    this.affiche = !this.affiche;
    this.passValue.emit(this.affiche);
  }


}
