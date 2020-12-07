import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likesCount') likesCount: number;
  @Input('isLiked') isSelected: boolean;
  // @Output() click = new EventEmitter

  onClick() {
    console.log('clicked');
    this.likesCount += (this.isSelected) ? -1 : 1;
    this.isSelected = !this.isSelected;
    // this.click.emit({ newValue: this.isSelected, newCount: this.likesCount });
  };
}
// export interface LikeChangedArgument {
//   newValue: boolean,
//   newCount: number
// }
