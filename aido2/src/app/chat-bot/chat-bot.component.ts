// chat-bot.component.ts

import { Component, ElementRef, ViewChild } from '@angular/core';
import { OpenaiService } from '../service/openai.service';

export class textResponse {
  sno: number = 1;
  text: string = '';
  response: any = '';
}

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent {
  @ViewChild('chatContainer') private chatContainer: ElementRef | undefined; // Reference to the chat container

  textList: textResponse[] = [{ sno: 1, text: '', response: '' }];
  prefix: string = ''; // Add a prefix for user messages

  constructor(private openaiService: OpenaiService) {}

  generateText(data: textResponse) {
    // Add the prefix to the user's input
    const userInput = this.prefix + data.text;

    this.openaiService.generateText(userInput).then(text => {
      data.response = text;

      const currentIndex = this.textList.indexOf(data);
      if (currentIndex === this.textList.length - 1) {
        this.textList.push({ sno: this.textList.length + 1, text: '', response: '' });

        // Scroll to the bottom when a new message is added
        if (this.chatContainer) {
          this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
        }
      }
    });
  }
}
