export type Pessoa = { //ficha
  id: number,
  nome: string,
  apelido: string,
  logradouro: string,
  numero: number,
  creditomax: number,
  bairro: string,
  foto: string,
  datapaga: number,
  tipofoto: string,
  total: number
}
export type Funcio = {
  id: number,
  nome: string,
  login: string,
  senha: string,
  tipo: string,
}
export type Compras = {
  id: number,
  dia: Date,
  total: number,
  apagar: number,
  tipopag: string,
  idfuncio: number,
  idfixa: number
}

export type ComprasComPessoas = {
  compras: Compras[],
  pessoas: Pessoa[]
}

export const ip = "192.168.18.52"; //192.168.18.52   10.48.9.126



