import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  // template: `<h1>{{ title }}</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: ['h1 {color: red; }']
})

export class AppComponent {
  title = 'To do application';

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "Sample task 1", done: true},
    { description: "Sample task 2", done:false},
    // { description: "play", done: false},
    // { description: "laugh", done: false},
  ];

  get items() {
    if(this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
    this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    this.allItems.unshift({ //unshift adds new element to beginning of the array
      description,
      done: false
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
}
