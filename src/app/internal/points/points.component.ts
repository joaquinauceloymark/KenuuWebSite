import { Component, Input, OnInit } from '@angular/core';
import { UserSession } from 'src/app/interfaces/UserSession.interface';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css'],
})
export class PointsComponent implements OnInit {
  @Input() userInfo!: UserSession;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
