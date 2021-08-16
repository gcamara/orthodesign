import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Membro } from 'src/app/model';
import { gsap } from 'gsap';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.scss']
})
export class MembroComponent implements OnChanges, OnInit {

  @ViewChild('leftPanel', { static: true }) leftPanel!: ElementRef<HTMLElement>;
  @ViewChild('dados', { static: true }) dados!: ElementRef<HTMLElement>;
  @ViewChild('descricao', { static: true }) descricao!: ElementRef<HTMLElement>;

  @Input()
  membro!: Membro;

  @Input()
  active = true;

  num = 20;
  timeline: any;

  constructor() {
    this.timeline = gsap.timeline();
  }

  ngOnInit(): void {
    this.timeline.from(this.leftPanel.nativeElement.children, {
      opacity: 0,
      duration: 1.2,
      x: () => {
        return this.num;
      },
      stagger: .2,
      ease: 'expo.out'
    }, 0)
    .from(this.dados.nativeElement.children, {
      stagger: .5,
      duration: 1.2,
      y: () => {
        this.num *= -1;
        return this.num;
      },
      opacity: 0,
      ease: 'expo.out'
    }, 0)
    .from(this.descricao.nativeElement, {
      opacity: 0,
      x: 50,
      duration: 1.2,
      ease: 'expo.out'
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.active.currentValue || changes.active.isFirstChange) {
      this.timeline.play();
      setTimeout(() => this.timeline.reverse(), 6300);
    } else if (!changes.active.currentValue) {
      this.timeline.kill(); 
    }
  }

}
