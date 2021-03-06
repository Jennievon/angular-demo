import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isFavorite'] //alternative method for input properties
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean;
  @Output() change = new EventEmitter;

  constructor() { }

  starClicked() {
    this.isSelected = !this.isSelected
    this.change.emit({ newValue: this.isSelected });
  }

  ngOnInit(): void {
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
