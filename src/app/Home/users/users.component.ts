import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  competencias: string[] = ["Front-End", "Analista de Suporte", "Angular", "Typescript", "SQL", "Banco de Dados", "Postgree"];
}
