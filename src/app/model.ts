export interface MenuItem {
    title: string;
    section?: string;
    route?: string;
}

export interface Servico {
    title: string;
    descricao: string;
    foto?: string;
}

export interface Membro {
    nome: string;
    descricao: string;
    cargo: string;
    imagem?: string;
}