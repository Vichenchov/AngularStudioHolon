import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Studio Holon';

  //app-drawing
  students: Student[] = [
    new Student('דניאל',22,'assets/images/PHOTO-2021-12-21-16-46-05 (1).jpg'),
    new Student('דניאל',22,'assets/images/PHOTO-2021-12-21-16-46-05 (2).jpg'),
    new Student('דניאל',22,'assets/images/PHOTO-2021-12-21-16-46-05 (3).jpg'),
    new Student('דניאל',22,'assets/images/PHOTO-2021-12-21-16-46-05.jpg'),
    new Student('דניאל',22,'assets/images/PHOTO-2021-12-21-16-46-06 (1).jpg'),
    new Student('דניאל',22,'assets/images/PHOTO-2021-12-21-16-46-07.jpg'),
    new Student('דניאל',22,'assets/images/PHOTO-2021-12-21-16-50-23.jpg'),
    new Student('דניאל',22,'assets/images/PHOTO-2021-12-21-16-50-38.jpg'),
    new Student('דניאל',22,'assets/images/PHOTO-2021-12-21-16-50-38.jpg'),
  ];
}
