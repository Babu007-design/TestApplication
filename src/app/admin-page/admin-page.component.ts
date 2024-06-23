import { Component, OnInit } from '@angular/core';
import { NutServiceService } from '../nut-service.service';
import { Nuts } from '../nuts';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  imageSrc: string | ArrayBuffer | null | undefined;
  data: Nuts | undefined;


  constructor(public imageservice:NutServiceService) { }

  ngOnInit(): void {
  }
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result as string;

        reader.readAsDataURL(file);
    }
}
uploadfile(event: any): void {

  // const formData = new FormData();

  // formData.append('imagedata',JSON.stringify(this.imageSrc), this.file.name);

  // const upload$ = this.http.post("https://httpbin.org/post", formData);

  // this.status = "uploading";

  // upload$.subscribe({
  //   next: () => {
  //     this.status = "success";
  //   },
  //   error: (error: any) => {
  //     this.status = "fail";
  //     return throwError(() => error);
  //   },
  // });


  const body =[
  {
    'imagedata':JSON.stringify(this.imageSrc)
  }];

this.data=new Nuts();

this.data.imagedata = this.imageSrc;


  this.imageservice.uploadImages(this.data).subscribe(data => {
   
  console.log(data);
    })
}
}
