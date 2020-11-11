import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {
  formSearch: FormGroup;
  constructor(
    formBuilder: FormBuilder
  ) {
    this.formSearch = formBuilder.group({
      stringSeach: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])]
    });
   }

  ngOnInit() {
  }

}
