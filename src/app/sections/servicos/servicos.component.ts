import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Servico } from 'src/app/model';
import { gsap } from 'gsap';
import { ScrollTrigger, EasePack } from 'gsap/all';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements AfterViewInit {

  @ViewChild('servicosSection', { static: true }) servicosComponent!: ElementRef<HTMLElement>;
  @ViewChild('titulo', { static: true }) titulo!: ElementRef<HTMLElement>;

  servicos: Servico[] = [
    {
      foto: 'harmonizacao.jpg',
      title: 'Harmonização Facial',
      descricao: 'Breve descrição de Harmonização Facial'
    },
    {
      title: 'Bichectomia',
      descricao: ''
    },
    {
      title: 'Ortodontia',
      descricao: 'Ortodontia é uma especialidade odontológica que corrige a posição dos dentes e dos ossos maxilares posicionados de forma inadequada. Dentes tortos ou dentes que não se encaixam corretamente são difíceis de serem mantidos limpos, podendo ser perdidos precocemente, devido à deterioração e à doença periodontal.'
    },
    {
      title: 'Implantes Dentários',
      descricao: ''
    },
    {
      title: 'Tratamento de canal',
      descricao: ''
    },
    {
      title: 'Prótese Dentária',
      descricao: ''
    },
    {
      title: 'Atendimento Infantil',
      descricao: ''
    },
    {
      title: 'Profilaxia',
      descricao: ''
    },
    {
      title: 'Implantes Dentários',
      descricao: ''
    },
    {
      title: 'Remoção de Sisos',
      descricao: ''
    },
  ]

  constructor() { }

  ngAfterViewInit(): void {
    const tl = gsap.timeline();
    console.log(this.servicosComponent.nativeElement.children);
    tl.from(this.titulo.nativeElement, { 
        x: -100,
        opacity: 0,
        duration: 1
      }, 0)
      // .from(this.servicosComponent.nativeElement, { 
      //   x: 50,
      //   opacity: 0,
      // }, 0)
      .from(this.servicosComponent.nativeElement.children, {
        x: 50,
        opacity: 0,
        stagger: .5,
        duration: 2,
        ease: 'power4'
      }, 0);

    ScrollTrigger.create({
      animation: tl,
      scrub: 3
    })
    // gsap.from(this.servicosComponent.nativeElement, {
    //   scrollTrigger: {
    //     trigger: 'servicos',
    //     scrub: 1
    //   },
    //   opacity: 0,
    //   x: -100
    // });
  }

}
