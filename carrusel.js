const track = document.getElementById("track");
  const btnAnt = document.getElementById("anterior");
  const btnSig = document.getElementById("siguiente");
  let desplazamiento = 0;
  const paso = 333;
  const maxDesplazamiento = (track.children.length - 3) * paso;

  btnSig.addEventListener("click", () => {
    if (desplazamiento < maxDesplazamiento) {
      desplazamiento += paso;
      track.style.transform = `translateX(-${desplazamiento}px)`;
    }
  });

  btnAnt.addEventListener("click", () => {
    if (desplazamiento > 0) {
      desplazamiento -= paso;
      track.style.transform = `translateX(-${desplazamiento}px)`;
    }
  });

  