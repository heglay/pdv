import React, { useState } from "react";
export default function LandPageConfig({ loja }) {
  const [corPrimaria, setCorPrimaria] = useState(loja.cor_primaria);
  const [corSecundaria, setCorSecundaria] = useState(loja.cor_secundaria);
  const [logo, setLogo] = useState(loja.logo);

  return (
    <div style={{ background: loja.cor_fundo }}>
      <h1 style={{ color: corPrimaria }}>Seja bem-vindo à {loja.nome}</h1>
      <img src={logo} alt="Logo da loja" />
      <button style={{ background: corSecundaria }}>Ver Cardápio</button>
    </div>
  );
}