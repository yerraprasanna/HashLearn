import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  color='';
  constructor() { }
  courseList=[
    {
      name:'Angular basics course',
      price:'350',
      isFavourite:false,
      addtoCart:false

    },
    {
      name:'Angular1 basics course',
      price:'450',
      isFavourite:false,
      addtoCart:false

    },

    {
      name:'Angular2 basics course',
      price:'500',
      isFavourite:false,
      addtoCart:false

    },

    {
      name:'Angular3 basics course',
      price:'650',
      isFavourite:false,
      addtoCart:false

    }
  ];
  ngOnInit(): void {
  }

//   toggleFavorite(item: IgxListItem) {
//     const contact = this.courseList[item.index - 1];
//     contact.isFavourite = !contact.isFavourite;
// }

}
