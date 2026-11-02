const sharp = require("sharp");

const largura = 1200;
const altura = 630;

const svg = `
<svg width="${largura}" height="${altura}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fundo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#174D9A"/>
      <stop offset="100%" stop-color="#10366E"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#fundo)"/>
  <rect x="0" y="0" width="1200" height="13" fill="#D92332"/>

  <text x="65" y="235"
    font-family="Arial, sans-serif"
    font-size="65"
    font-weight="bold"
    fill="#FFFFFF">
    DROGARIA
  </text>

  <text x="65" y="315"
    font-family="Arial, sans-serif"
    font-size="78"
    font-weight="bold"
    fill="#FFFFFF">
    POTIGUAR
  </text>

  <rect x="65" y="350" width="105" height="7" rx="3" fill="#D92332"/>

  <text x="65" y="410"
    font-family="Arial, sans-serif"
    font-size="29"
    fill="#FFFFFF">
    Recanto das Emas
  </text>

  <text x="65" y="455"
    font-family="Arial, sans-serif"
    font-size="25"
    fill="#DCE9FA">
    Brasília - DF
  </text>

  <text x="65" y="555"
    font-family="Arial, sans-serif"
    font-size="22"
    fill="#FFFFFF">
    (61) 3334-1386
  </text>
</svg>
`;

async function gerarImagem() {
  await sharp({
    create: {
      width: largura,
      height: altura,
      channels: 3,
      background: "#174D9A",
    },
  })
    .composite([
      {
        input: await sharp("public/images/drogaria-potiguar/fachada-2.jpg")
          .resize(650, 630, { fit: "cover", position: "centre" })
          .jpeg()
          .toBuffer(),
        left: 0,
        top: 0,
      },
      {
        input: Buffer.from(svg),
        left: 0,
        top: 0,
      },
    ])
    .jpeg({ quality: 90 })
    .toFile("public/images/og-drogaria-potiguar.jpg");

  console.log("Imagem de compartilhamento criada com sucesso!");
}

gerarImagem().catch(console.error);
