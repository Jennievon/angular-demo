import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { GithubFollowersService } from '../services/github-followers.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any = [];

  constructor(private service: GithubFollowersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      // let id = this.route.snapshot.paramMap.get('id');

      this.route.queryParamMap
      // let page = this.route.snapshot.queryParamMap.get('page');
    ])
      .pipe(switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        // this.service.getAll({ id: id, page: page })
        return this.service.getAll();
      }))
      .subscribe(followers => {
        this.followers = followers;
      })
  }
}
