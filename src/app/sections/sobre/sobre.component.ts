import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  @ViewChild('foto', { static: true }) foto!: ElementRef<HTMLImageElement>;
  @ViewChild('titulo', { static: true }) titulo!: ElementRef<HTMLElement>;
  @ViewChild('descricao', { static: true }) descricao!: ElementRef<HTMLElement>;
  @ViewChild('sobre', { static: true }) sobre!: ElementRef<HTMLElement>;

  factor = 50;

  constructor() { }

  ngOnInit(): void {
    const tl = gsap.timeline();
    tl.from(this.foto.nativeElement, {
      x: -100,
      opacity: 0,
      duration: .3
    }, 0)
      .from(this.titulo.nativeElement.children, {
        duration: .2,
        y: () => {
          this.factor *= -1;
          return this.factor;
        },
        opacity: 0
      }, 0)
      .from(this.descricao.nativeElement, {
        x: 30,
        opacity: 0,
        duration: .2
      }, 0)
      .from(this.sobre.nativeElement, {
        opacity: 0,
        y: -30,
        duration: .5
      }, 0);

    ScrollTrigger.create({
      animation: tl,
      scrub: 1,
      trigger: 'app-sobre'
    })
  }

}
