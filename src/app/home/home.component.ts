import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  goals = [
    {'id': 1, 'title': 'Min Glasses of Water', 'progress': 6, 'target': 8, direction: 'min'},
    {'id': 2, 'title': 'Max Alcaholic Beverages', 'progress': 0, 'target': 3, direction: 'max'},
    {'id': 3, 'title': 'Min Meditation Sessions', 'progress': 1, 'target': 1, direction: 'min'},
    {'id': 4, 'title': 'Min Eat Healthy Lunch', 'progress': 1, 'target': 4, direction: 'min'},
  ];

  recentNotifications = [
    {
      'id': 1,
      'date': '2017-06-22 12:05:00',
      'notificationText': 'Drinking may reduce the motivation you have to do the things that are important to you tonight.'
    },
    {
      'id': 2,
      'date': '2017-06-22 11:05:00',
      'notificationText': 'Give others your undivided attention when in conversation with them.'
    },
    {
      'id': 3,
      'date': '2017-06-22 10:05:00',
      'notificationText': 'Situations that frustrate you are an opportunity to grow.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  addNew() {
  }

}
