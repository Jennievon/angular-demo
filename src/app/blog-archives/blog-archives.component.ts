import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-archives',
  templateUrl: './blog-archives.component.html',
  styleUrls: ['./blog-archives.component.css']
})
export class BlogArchivesComponent implements OnInit {
  blogArchives = [
    {
      id: 1,
      year: 2017,
      month: 1
    },
    {
      id: 2,
      year: 2017,
      month: 2
    },
    {
      id: 3,
      year: 2017,
      month: 3
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
