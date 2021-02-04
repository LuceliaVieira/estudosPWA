import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
})
export class CacheComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log("ABOBORA");
  }

  localStorageItem(): any{
    return localStorage.getItem("user");
  }

  localStorageSetItem(person) {
    localStorage.setItem("user", JSON.stringify(person));
  }

  clearAllLocalStorage(){
    return localStorage.clear();
  }

  clearUserLocalStorage(){
    return localStorage.removeItem("user");
  }
}
