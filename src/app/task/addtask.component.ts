import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription }       from 'rxjs/Subscription';

@Component({
  selector: 'app-task',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
