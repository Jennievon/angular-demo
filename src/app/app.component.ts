import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
// import { LikeChangedArgument } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // post = {
  //   title: 'Input & Output Properties',
  //   isFavorite: true,
  // }

  // tweet = {
  //   body: '...',
  //   isLiked: true,
  //   likesCount: 10
  // }

  viewMode = 'map';

  // favoriteClicked(eventArgs: FavoriteChangedEventArgs) {
  //   console.log('Favorite Changed: ', eventArgs.newValue);
  // }

  // likeClicked(eventArgs: LikeChangedArgument) {
  //   console.log('Like Changed: ', eventArgs.newValue, eventArgs.newCount);
  // }
}
