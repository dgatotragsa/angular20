import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './share/card/card';
import { Tareas } from './share/tareas/tareas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tareas, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Lab1');
}
