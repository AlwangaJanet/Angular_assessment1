import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinningWheelComponent } from "./spinning-wheel/spinning-wheel.component";
import { TalkativeDirective } from './talkative.directive';
import { CommonModule } from '@angular/common';
import { PlaceholderPipe } from './Pipe/placeholder.pipe';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SpinningWheelComponent,TalkativeDirective,CommonModule,PlaceholderPipe,FormsModule]
})
export class AppComponent {
  title = 'Assessment';
  input = ''
}
