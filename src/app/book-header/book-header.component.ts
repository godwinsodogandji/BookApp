import { Component } from '@angular/core';

@Component({
  selector: 'app-book-header',
  templateUrl: './book-header.component.html',
  styleUrl: './book-header.component.css'
})
export class BookHeaderComponent {
logo : string ="../assets/logoipsum-317.svg";
affiche:boolean = false;
toogleForm(){
 this.affiche=!this.affiche;
}

}
