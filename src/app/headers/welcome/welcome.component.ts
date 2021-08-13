import { Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('header1', { static: true }) header1!: ElementRef<HTMLHeadingElement>;
  @ViewChild('header2', { static: true }) header2!: ElementRef<HTMLHeadingElement>;
  @ViewChild('autoestima', { static: true }) autoestima!: ElementRef<HTMLParagraphElement>;
  @ViewChild('btnServicos', { static: true }) btnServicos!: ElementRef<HTMLButtonElement>;

  constructor() { }

  ngOnInit(): void {
    this.animateHeaders();
    this.animateButtonAndText();
  }

  animateButtonAndText(): void {
    gsap.from(this.autoestima.nativeElement, {
      opacity: 0,
      x: -20,
      delay: .8,
    });
    
    gsap.from(this.btnServicos.nativeElement, {
      opacity: 0,
      x: 20,
      delay: .8,
    })
  }

  animateHeaders(): void {
    //Animação para headers
    gsap.from(this.header1.nativeElement, {
      opacity: 0,
      y: -20,
      duration: .8
    });
    gsap.from(this.header2.nativeElement, {
      opacity: 0,
      y: 20,
      delay: .45,
      duration: .8
    });
  }

}
