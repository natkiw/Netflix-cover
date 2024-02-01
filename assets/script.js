const body = document.querySelector('body');

const avancarScroll = (elemento, direcao) => {
  const carrocelContent = document.querySelector(elemento);

  if(direcao == 'left'){
    carrocelContent.scrollLeft -= 100;
    // carrocelContent.scrollLeft = carrocelContent.scrollLeft - 100;
  } else if (direcao == 'right'){
    carrocelContent.scrollLeft += 100;
    // carrocelContent.scrollRight = carrocelContent.scrollRight - 100;
  }
}

const pageFilm = (titulo, codeVideo) => {
  body.innerHTML = `
  <header>
  <img class="logo" src="assets/images/netflix-logo.webp">
  </header>

  <main>
    <div id="container-voltar" onClick="backHome()"> 
      <span> < Voltar </span> 
    </div>

    <div class="container">
      <span id="title">${titulo}</span>

      <iframe width="900" height="400" src="https://www.youtube.com/embed/${codeVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

  </main>
  `
  console.log("aqui")
}

const createCarrocel = () => {
  
  const listSuspense = [
    {
      title: "Tempo",
      capa: "assets/images/capas/capa-filme-tempo.jpg",
      code: "zxnVGnQKM4E"
    },
    {
      title: "Destino A Aderiva",
      capa: "assets/images/capas/destino-a-deriva.jpg",
      code: "RsRyeesfbEc"
    },
    {
      title: "Gaiola Mental",
      capa: "assets/images/capas/gaiola-mental.jpg",
      code: "NIF-Xz3_fsk"
    },
    {
      title: "Missão no mar vermelho",
      capa: "assets/images/capas/missao-no-mar-vermelho.jpg",
      code: "YzFV-thA0wE"
    },
    {
      title: "O Mundo Depois De Nós",
      capa: "assets/images/capas/o-mundo-depois-de-nos.jpg",
      code: "X6UBHGb0OA0"
    },
    {
      title: "oculpado",
      capa: "assets/images/capas/oculpado.jpg",
      code: "Ot-mN7qgYDI"
    },
  ];

  listSuspense.forEach((e) => createCarrocelItem(".suspense", e.capa, e.title, e.code))

  const listAcao = [
    {
      title: "Velozes E Furiosos 9",
      capa: "assets/images/capas/velozes-e-furiosos.jpg",
      code: "NnDGWyfP7q4"
    },
    {
      title: "Exôdo: Deuses e Reis",
      capa: "assets/images/capas/exodo.jpg",
      code: "jexNaaN6v04"
    },
    {
      title: "Resgate 2",
      capa: "assets/images/capas/resgate.jpg",
      code: "NSa4DvXi1Xs"
    },
    {
      title: "Anônimo",
      capa: "assets/images/capas/anonimo.jpg",
      code: "5suJxv2YcL4"
    },
    {
      title: "Tropa De Elite",
      capa: "assets/images/capas/tropa-de-elite.jpg",
      code: "uZBiNJQxtGw"
    },
    {
      title: "Rota De Fuga",
      capa: "assets/images/capas/rota-de-fuga.jpg",
      code: "jgrFJkHGwDA"
    },
  ];

  listAcao.forEach((e) => createCarrocelItem(".acao", e.capa, e.title, e.code))

  const listRomance = [
    {
      title: "Amor A Primeira Vista",
      capa: "assets/images/capas/amor-a-primeira-vista.jpg",
      code: "5gJdCxnllDY"
    },
    {
      title: "Cinquenta Tons De Liberdade",
      capa: "assets/images/capas/cinquenta-tons-de-liberdade.jpg",
      code: "DFeCm0lJjJw"
    },
    {
      title: "Comer, Rezar e Amar",
      capa: "assets/images/capas/comer-rezar-amar.jpg",
      code: "cji7pUWhBi8"
    },
    {
      title: "Esposa De Mentirinha",
      capa: "assets/images/capas/esposa-de-mentirinha.jpg",
      code: "QmL1mdzS544"
    },
    {
      title: "Norbit",
      capa: "assets/images/capas/norbit.jpg",
      code: "HFIdZpc2L6w"
    },
    {
      title: "Uma Linda Mulher",
      capa: "assets/images/capas/uma-linda-mulher.jpg",
      code: "Qq-MbAo2Y5o"
    },
  ];

  listRomance.forEach((e) => createCarrocelItem(".romance", e.capa, e.title, e.code))
}

const createCarrocelItem = (generoClass, capa, titulo, codeVideo) =>{
  const carrocel = document.querySelector(".carrocel-content" + generoClass);
  const newDiv = document.createElement("div");
  newDiv.classList.add("carrocel-item");
  newDiv.onclick = () => pageFilm(titulo, codeVideo);

  //Adiciona o conteudo ao elemento div
  newDiv.innerHTML = `
    <img class="carrocel-capa" src="${capa}" alt="capa filme ${titulo}">
    <span class="carrocel-title">${titulo}</span>
  `
  carrocel.appendChild(newDiv);
}

const backHome = () => {
  body.innerHTML = `
    <header>
      <img class="logo" src="assets/images/netflix-logo.webp">
    </header>

      <main id="main-home">
       <div class="carrocel suspense">
     <img onclick="avancarScroll('.carrocel-content.suspense', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.webp">
      <div class="carrocel-content suspense"></div>
       <img onclick="avancarScroll('.carrocel-content.suspense', 'right')" class="carrocel-seta" src="assets/images/seta-direita.webp">
    </div>
    
    <div class="carrocel acao">
     <img onclick="avancarScroll('.carrocel-content.acao', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.webp">
      <div class="carrocel-content acao"></div>
       <img onclick="avancarScroll('.carrocel-content.acao', 'right')" class="carrocel-seta" src="assets/images/seta-direita.webp">
    </div>
    
    <div class="carrocel romance">
     <img onclick="avancarScroll('.carrocel-content.romance', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.webp">
      <div class="carrocel-content romance"></div>
       <img onclick="avancarScroll('.carrocel-content.romance', 'right')" class="carrocel-seta" src="assets/images/seta-direita.webp">
    </div>
      </main>
  `;

  createCarrocel()
}

createCarrocel()