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
    const messages = {role: 'Engineer', text: 'I am a software engineer.'}
    return this.openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      
      
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
