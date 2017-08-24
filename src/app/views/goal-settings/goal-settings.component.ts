import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-goal-settings',
  templateUrl: './goal-settings.component.html',
  styleUrls: ['./goal-settings.component.scss']
})
export class GoalSettingsComponent implements OnInit {

  public goalType: string;
  public target: number;
  public recurrence: string;


  constructor( public dialogRef: MdDialogRef<GoalSettingsComponent> ) { }

  ngOnInit() {
  }

}
