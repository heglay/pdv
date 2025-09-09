import { exec } from "child_process";
export function imprimirPedidoCozinha(pedido: string) {
  exec(`lp -d nome_impressora_cozinha <<< "${pedido}"`, (error, stdout, stderr) => {
    if (error) {
      console.error("Erro ao imprimir:", stderr);
      return false;
    }
    return true;
  });
}