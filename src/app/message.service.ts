import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages:string[]=[
    'Good morning!',
    'Have a nice dayy!!',
    'Nice to meet you..',
    'Always a pleasure',
    'Good evening..'

  ]

  getRandomMessage():string{
    return this.messages[Math.floor(Math.random()* this.messages.length)]
  }
  
}
