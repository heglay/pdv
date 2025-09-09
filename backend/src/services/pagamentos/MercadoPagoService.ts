import axios from "axios";

export async function criarPagamentoMP(valor: number, descricao: string, cliente: string) {
  const token = process.env.MERCADOPAGO_TOKEN;
  const response = await axios.post(
    "https://api.mercadopago.com/v1/payments",
    {
      transaction_amount: valor,
      description: descricao,
      payer: { email: cliente },
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
}