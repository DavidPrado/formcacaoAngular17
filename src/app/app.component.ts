import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<div style="display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 1rem;">
  @for (user of userDatasList; track user.id) {
    @switch (user.age) {
      @case (20) {
        <span>{{user.name}} is {{user.profession}} and is 20 years old</span>
      }
      @default {
        <span>{{user.name}} is {{user.profession}} and yuor age is {{user.age}}</span>
      }
    }
  } @empty {
    <span>Dont have datas to show</span>
  }
</div>`,
})
export class AppComponent {
  title = 'learnAngular17';
  userDatasList: Array<{
    name: string;
    age: number;
    profession: string;
    id: string;
  }> = [
    { age: 20, name: 'Marcos', profession: 'Software Developer', id: '123' },
    { age: 30, name: 'Marcelo', profession: 'Software Developer', id: '456' },
    { age: 40, name: 'Carlos', profession: 'Scrum Master', id: '789' },
    { age: 30, name: 'Maria', profession: 'UX Designer', id: '123' },
  ];
}
