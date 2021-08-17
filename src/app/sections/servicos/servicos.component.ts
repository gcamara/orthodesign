import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Servico } from 'src/app/model';
import { gsap } from 'gsap';
import { ScrollTrigger, EasePack } from 'gsap/all';
import { SwiperComponent } from 'swiper/angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MenuService } from 'src/app/menu/menu.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements AfterViewInit, OnInit {

  @ViewChild('swiper', { static: true }) servicosComponent!: SwiperComponent;
  @ViewChild('titulo', { static: true }) titulo!: ElementRef<HTMLElement>;
  @ViewChild('saibaMais', { static: true }) saibaMais!: ElementRef<HTMLElement>;

  amount = 3;
  breakpoints = ['(max-width: 767px)', '(min-width: 768px)', '(min-width: 1024px)'];

  servicos: Servico[] = [
    {
      foto: 'harmonizacao.jpg',
      title: 'Harmonização Facial',
      descricao: 'A Harmonização Facial é um conjunto de procedimentos estéticos que tem como objetivo proporcionar a harmonia e o equilíbrio estético da face, gerenciando o processo de envelhecimento para que você possa ter a sua melhor versão. Dentro desse conjunto de procedimentos, estão presentes: toxina botulínica, preenchimento com ácido hialurônico, bioestimuladores de colágeno, fios faciais, entre outros.'
    },
    {
      foto: 'bichectomia.jpg',
      title: 'Bichectomia',
      descricao: 'A bichectomia é um procedimento cirúrgico estético-funcional, cujo principal objetivo é reduzir o tamanho das bochechas. Para isso, retira-se parte das “bolas de Bichat”, que são um tecido gorduroso, localizado abaixo das maçãs do rosto.'
    },
    {
      foto: 'ortodontia.jpg',
      title: 'Ortodontia',
      descricao: 'Ortodontia é uma especialidade odontológica que corrige a posição dos dentes e dos ossos maxilares posicionados de forma inadequada. Dentes tortos ou dentes que não se encaixam corretamente são difíceis de serem mantidos limpos, podendo ser perdidos precocemente, devido à deterioração e à doença periodontal.'
    },
    {
      foto: 'implante.jpg',
      title: 'Implantes Dentários',
      descricao: 'Quando se perde um ou mais dentes, por qualquer motivo que seja o implante é considerado a melhor e mais segura técnica para repor um dente perdido. Através deste, os pacientes que perderam seus dentes podem ter as funções mastigatórias e fonéticas restauradas, assim como o reestabelecimento da estética do sorriso.'
    },
    {
      title: 'Tratamento de canal',
      foto: 'canal.jpg',
      descricao: `O tratamento do canal é necessário quando uma lesão ou cárie significativa danifica a polpado dente. A raiz fica infectada ou inflamada.
      Nós trabalhamos com tecnologia mecanizada, o que nos permite muito mais rapidez e conforto no tratamento de canal.`
    },
    {
      foto: 'protese.jpg',
      title: 'Prótese Dentária',
      descricao: 'As próteses dentárias são estruturas que podem ser utilizadas com o objetivo de restaurar o sorriso por meio da substituição de um ou mais dentes que faltam na boca ou que estão desgastados. Existem vários tipos de próteses, como: coroas, proteses removíveis, dentaduras, entre outras.'
    },
    {
      foto: 'atendimento-infantil.jpg',
      title: 'Atendimento Infantil',
      descricao: 'Fazemos o acompanhamento desde o primeiro dentinho. O ideal é que a visita ao dentista para a realização da profilaxia seja feita, pelo menos, duas vezes ao ano, com um intervalo de seis meses entre elas.'
    },
    {
      title: 'Profilaxia',
      foto: 'profilaxia.jpg',
      descricao: `
        A profilaxia, que nada mais é do que a limpeza dos dentes, é feito no consultório do dentista e pode prevenir o surgimento de uma série de doenças bucais.
        o procedimento conta com algumas ferramentas, como a pasta de dente profilática e escova rotatória profissional, que são capazes de remover com precisão a placa bacteriana. 
        Além disso, para a prevenção de cáries, fazemos o uso de produtos com flúor.`
    },
    {
      title: 'Remoção de Sisos',
      descricao: `
        Os terceiros molares, também conhecidos como dentes sisos, são os últimos molares a nascer.
        Nem todo mundo mantém esses dentes, porque, em alguns casos, eles podem até causar danos se não irromperem de forma adequada. 
        Quando esses molares surgem, em geral entre 16 e 20 anos de idade, pode não haver espaço suficiente para que eles nascerem. 
        Além disso, a sua posição é de difícil higienização, facilitando surgimento de cáries.`,
      foto: 'siso.jpg'
    },
    {
      foto: 'clareamento.jpg',
      title: 'Clareamento',
      descricao: `Ter os dentes mais brancos, como nas propagandas, é o desejo de muita gente, que acaba recorrendo ao clareamento dental. Por causa de pigmentos externos, com o passar do tempo, o dente fica com uma cor mais amarelada, dando um aspecto de dentes envelhecidos.
    Existem dois tipos de clareamento: o supervisionado que é feito em casa e o de consultório.`
    },
  ]

  constructor(private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private menuService: MenuService) {
  }

  getUrl(servico: Servico) {
    return this.menuService.getUrlWithMessage(`Olá, gostaria de marcar uma consulta para ${servico.title}`);
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(this.breakpoints)
      .subscribe((data) => {
        if (data.breakpoints[this.breakpoints[2]]) {
          this.amount = 3;
        }
        else if (data.breakpoints[this.breakpoints[1]]) {
          this.amount = 2;
        }
        else if (data.breakpoints[this.breakpoints[0]]) { 
          this.amount = 1;
        }

        this.cdr.detectChanges();
      });
  }

  ngAfterViewInit(): void {
    const tl = gsap.timeline();
    tl.from(this.titulo.nativeElement, {
      x: -100,
      opacity: 0,
      duration: 1
    }, 0);
    // .from(this.saibaMais.nativeElement, {
    //   y: 30,
    //   opacity: 0,
    //   ease: 'power4'
    // });

    ScrollTrigger.create({
      animation: tl,
      trigger: 'app-servicos',
      scrub: 3,
      onEnter: () => tl.restart()
    })
  }

}
