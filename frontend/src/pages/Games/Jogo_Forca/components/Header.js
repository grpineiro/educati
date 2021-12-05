import React from "react";
import Swal from "sweetalert2";

const Header = () => {
  const HandleButton = () => {
    Swal.fire({
      icon: "info",
      title: "Tutorial",
      text: "Use o teclado para tentar descobrir a palavra escondida.",
      confirmButtonColor: "#2563EB",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "info",
          title: "Dica",
          text: "As palavras são nomes de animais.",
          confirmButtonColor: "#2563EB",
        });
      }
    });
  };

  return (
    <>
      <h1 id="title_hangman">Jogo da forca</h1>
      <p id="subtitle_hangman">Descubra a palavra secreta e salve o Geremias da forca</p>
      <button id="btn_regras" onClick={HandleButton}>Regras</button>
    </>
  );
};

export default Header;
