import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  kana_validation: boolean = false;
  name_kanji: String = "";

  signUp(){

  }

}
