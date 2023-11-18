import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit() {
    const teamButton = this.elRef.nativeElement.querySelector('#teamButton');
    const appDescription = this.elRef.nativeElement.querySelector('.app-description');
    const teamDescription = this.elRef.nativeElement.querySelector('.team-description');

    teamButton.addEventListener('click', () => {
      if (appDescription.classList.contains('hidden')) {
        this.renderer.removeClass(appDescription, 'hidden');
        this.renderer.addClass(teamDescription, 'hidden');
      } else {
        this.renderer.addClass(appDescription, 'hidden');
        this.renderer.removeClass(teamDescription, 'hidden');
      }
    });
  }
}
