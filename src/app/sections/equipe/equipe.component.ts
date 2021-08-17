import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Membro } from 'src/app/model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  @ViewChild('titulo', { static: true }) titulo!: ElementRef<HTMLElement>;
  @ViewChild('swiper', { static: true }) swiper!: ElementRef<HTMLElement>;

  tituloN = -20;

  membros: Membro[] = [
    {
      nome: 'Dra. Yasmin Pinho Esmeraldo',
      cargo: 'Cirurgiã Dentista',
      descricao: `
        Formada em Odontologia pela Universidade de Fortaleza. 
        Especialista em Prótese Dentária, aperfeiçoamento em Periodontia e nos últimos 3 anos descobriu uma paixão pela Harmonização Facial. 
        Concluiu residência na área e cursos complementares de Toxina Botulínica, preenchimentos com ácido hialurônico e Bioestimuladores de colágeno.
        Diretora clínica da orthodesign e produzo conteúdo no Instagram para dividir conhecimento de HOF.`,
      imagem: 'yasmin.jpg'
    },
    {
      nome: 'Glayvane Pinho Esmeraldo',
      cargo: 'Gerente Relacionamento & Administrativo',
      descricao: `
        Formada em Enfermagem pela Universidade Federal do Ceará, pós graduada em Nefrologia, Auditoria e Psicanálise. 
        Após 21 anos atuando na área da Nefrologia, trouxe para a Orthodesign: organização, vasta experiência com o cliente, cuidado assistencial e biossegurança.
        Responsável pelo relacionamento com o cliente e por todo o background administrativo e financeiro. 
        Função estratégica e que promove o diferencial de mercado, no tocante à preservação e fidelização essencial ao público assistido.`,
      imagem: 'glayvane.jpg'
    },
    { 
      nome: 'Gabriel Câmara Carvalho', 
      cargo: 'Diretor de TI', 
      imagem: 'gabriel.jpg',
      descricao: `
        Atua na área de tecnologia há mais de 12 anos prestando consultoria como desenvolvedor.
        Trabalhou como analista em tecnologia para bancos como Itaú, HSBC Chile, BTG Pactual e outros bancos no exterior. 
        É responsável pela área de TI da Orthodesign.`
    },
    {
      nome: 'Dra. Isabelle Antunes',
      cargo: 'Cirurgiã Dentista - Endodontista',
      descricao: `
        Formada em Odontologia pela Universidade de Fortaleza, aperfeiçoamento em cirurgia oral pela associação brasileira de Odontologia.
        Especialista em endodontia, atuando no tratamento e retratamento de canais de dentes acometidos por cárie, traumas e outros fatores, 
        garantindo a manutenção da estética, função e evitando a perda dentária precoce.`,
      imagem: 'isabelle.jpg'
    },
    {
      nome: 'Dr. Felipe Ferreira Sales',
      cargo: 'Cirurgião Dentista - Implantodontista',
      descricao: `
        Formado em Odontologia pela Universidade de Fortaleza. 
        Especialista em Implantodontia pela Academia Cearense de Odontologia, realizou cursos na área de cirurgia oral. 
        Capacitado em atendimentos sob sedação consciente com óxido nitroso, além de residência em HOF e experiência em Bichectomia.`,
        imagem: 'felipe.jpg'
    },
    {
      nome: 'Dra. Karine Tomaz',
      cargo: 'Cirurgiã Dentista - Ortodontista',
      descricao: `
        Formada em Odontologia pela Universidade Federal do Ceará.
        Especialista em Ortodontia, Ortopedia Funcional dos Maxilares e Invisalign Doctor.
        Aperfeiçoamento em Periodontia, com foco em cirurgia periodontal estética.
        Integra o quadro clínico da Orthodesign desde 2016, buscando sempre transformar sorrisos e vidas!
      `,
      imagem: 'karine.jpg'
    }
  ]

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const tl = gsap.timeline();
    tl.from(this.titulo.nativeElement.children, {
      opacity: 0,
      x: () => {
        this.tituloN *= -1;
        return this.tituloN;
      },
      stagger: .2
    }, 0)
      .from(this.swiper.nativeElement, {
        opacity: 0
      });

    ScrollTrigger.create({
      animation: tl,
      scrub: 2,
      trigger: 'app-equipe'
    });
  }

}
