import { Injectable } from '@angular/core';
import OpenAIApi from 'openai';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai: OpenAIApi;
  private apiKey: string = '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';

  constructor() {
    this.openai = new OpenAIApi({ apiKey: this.apiKey, dangerouslyAllowBrowser: true });
  }
  
  generateText(prompt: string): Promise<string | undefined> {
   
    return this.openai.completions.create({
      model: "text-davinci-001",
      
      
      prompt: prompt,
      max_tokens: 256,
      temperature: 0.4,
    }).then(response => {
      return response.choices[0].text;
    }).catch(error => {
      console.error('Error generating text:', error);
      return '';
      

    });
  }
}
