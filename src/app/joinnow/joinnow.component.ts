import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
      })
  }

  sendMessage() {
    // this.http.post('https:/mailthis.to/manesanpillay28@gmail.com', this.FormData.value).subscribe((result) => {
    //   console.log(result);
    // }, (error) => console.log(error));
  }

}
