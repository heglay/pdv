export interface Loja {
  id: string;
  nome: string;
  dominio: string;
  logo: string;
  cor_primaria: string; // laranja
  cor_secundaria: string; // verde
  cor_fundo: string; // branco
  owner_email: string;
  gateway_pagamento: 'asaas' | 'pagbank' | 'mercadopago' | 'paypal';
  gateway_config: object;
  criada_em: Date;
}