import { Component } from '@angular/core';
import { OpenaiService } from '../service/openai.service';
export class textResponse{
  sno:number=1;
  text:string='';
  response:any='';
}
@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css'
})
export class ChatBotComponent {
  textList:textResponse[]=[{sno:1,text:'',response:''}];

  constructor(private openaiService: OpenaiService) {}

  generateText(data:textResponse) {
    this.openaiService.generateText(data.text).then(text => {
      data.response = text;
      if(this.textList.length===data.sno){
        this.textList.push({sno:1,text:'',response:''});
      }
    });
  }
}
