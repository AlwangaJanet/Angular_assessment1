import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Placeholder',
  standalone: true
})
export class PlaceholderPipe implements PipeTransform {

  transform(value: string, placeholder: string, minLength: number = 0): any {
    if (!value || value.length < minLength) {
      return `<span style="color: #ccc;">${placeholder}</span>`
    } else {
      return value
    }
  }

}