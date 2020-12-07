import { Component } from "@angular/core";
// import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})
export class CoursesComponent {
    // title = "List of courses";
    // imageUrl = "https://www.lorempixel.com/400/300"
    // courses;
    // isActive = true;
    // email = "xy@zee.com";
    course = {
        title: " Power",
        name: "Apparent Power",
        number: "4.23487",
        amount: "190.345",
        rating: "0.23",
        description: "Lorem Ipsum aewrerfvh bdfhbvsfs rehjfjhffgarfsjlvjhrbg No Stress ME! I just wan pass 50 letters, so I can use substring. I suppose it has passed now."
    };

    // constructor(service: CoursesService) {
    //     this.courses = service.getCourses()
    // }

    // buttonClicked(ref) {
    //     console.log('Button Clicked:', ref);
    // }

    // keyUp() {
    //     console.log(this.email);
    // }
}