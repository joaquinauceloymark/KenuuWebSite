import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent {
  titulo: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event): event is ActivationEnd => event instanceof ActivationEnd
        ),
        filter((event) => event.snapshot.firstChild === null),
        map((event) => event.snapshot.data)
      )
      .subscribe((data: any) => {
        this.titulo = data.titulo;
      });
  }
}
