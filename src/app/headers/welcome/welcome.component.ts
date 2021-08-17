import { Component, ElementRef, HostBinding, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnChanges {

  @Input() smallText!: string;
  @Input() mainText!: string;
  @Input() description!: string;
  @Input() btnLabel!: string;
  @Input() btnRoute!: string;
  @Input() image!: string;
  @Input() active = false;
  @Input() swipez!: SwiperComponent;

  @ViewChild('header1', { static: true }) header1!: ElementRef<HTMLHeadingElement>;
  @ViewChild('header2', { static: true }) header2!: ElementRef<HTMLHeadingElement>;
  @ViewChild('autoestima', { static: true }) autoestima!: ElementRef<HTMLParagraphElement>;
  @ViewChild('btnServicos', { static: true }) btnServicos!: ElementRef<HTMLButtonElement>;

  @HostBinding('style.backgroundImage') backgroundImage!: string;

  timeline = gsap.timeline({
    onReverseComplete: () => {
      this.swipez.swiperRef.slideNext();
    }
  });

  timeout!: any;


  constructor() { }

  ngOnInit(): void {
    this.animateHeaders();
    this.animateButtonAndText();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.image?.currentValue) {
      this.backgroundImage = `url(${this.image})`;
    }

    if (changes.active?.currentValue || (changes.active?.isFirstChange() && changes.active?.currentValue)) {
      window.clearTimeout(this.timeout);
      this.timeline.play();
      this.timeout = setTimeout(() => this.timeline.reverse(), 6300);
    } else if (!changes.active?.currentValue) {
      window.clearTimeout(this.timeout);
      this.timeline.reverse(-1);
    }
  }

  animateButtonAndText(): void {
    this.timeline.from(this.autoestima.nativeElement, {
      opacity: 0,
      x: -20,
      delay: .8,
    }, 0)
      .from(this.btnServicos.nativeElement, {
        opacity: 0,
        x: 20,
        delay: .8,
      }, 0)
  }

  animateHeaders(): void {
    //Animação para headers
    this.timeline.from(this.header1.nativeElement, {
      opacity: 0,
      y: -20,
      duration: .8
    }, 0)
      .from(this.header2.nativeElement, {
        opacity: 0,
        y: 20,
        delay: .45,
        duration: .8
      }, 0);
  }

}
