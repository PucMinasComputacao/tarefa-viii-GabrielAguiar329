const catalogo = [
  {
    id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama"],
    nota: 9.0,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 9.5,
    assistido: true
  },
  {
    id: 3,
    titulo: "Vingadores",
    tipo: "filme",
    ano: 2012,
    generos: ["ação"],
    nota: 8.0,
    assistido: false
  },
  {
    id: 4,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["ficção", "terror"],
    nota: 8.7,
    assistido: true
  },
  {
    id: 5,
    titulo: "Coringa",
    tipo: "filme",
    ano: 2019,
    generos: ["drama"],
    nota: 8.5,
    assistido: false
  },
  {
    id: 6,
    titulo: "Dark",
    tipo: "serie",
    ano: 2017,
    generos: ["ficção", "mistério"],
    nota: 9.2,
    assistido: true
  }
];

console.log(catalogo)

console.log("Primeiro título:", catalogo[0].titulo);

console.log("Ano do último:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos[1]) {
  console.log("Segundo gênero do terceiro:", catalogo[2].generos[1]);
} else {
  console.log("O terceiro item tem apenas 1 gênero.");
}

catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("Títulos em maiúsculo:", titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log("Não assistidos:", naoAssistidos.length);

const melhor = catalogo.find(item => item.nota >= 9);
if (melhor) {
  console.log("Primeiro com nota >= 9:", melhor.titulo, melhor.nota);
} else {
  console.log("Nenhum item com nota >= 9");
}

const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));

const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Tem item antes de 2000?", temAntigo);
console.log("Todos têm gênero?", todosTemGenero);

const output = document.getElementById("output");

const filmes = catalogo.filter(item => item.tipo === "filme").length;
const series = catalogo.filter(item => item.tipo === "serie").length;


const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

  output.innerHTML = `
  <p>Total de itens: ${catalogo.length}</p>
  <p>Filmes: ${filmes}</p>
  <p>Séries: ${series}</p>
  <p>Não assistidos: ${naoAssistidos.length}</p>
  <p>Média geral: ${mediaGeral.toFixed(2)}</p>
  
  <h3>3 melhores:</h3>
  <ul>
    ${ranking.map(item => `<li>${item.titulo} (${item.nota})</li>`).join("")}
  </ul>
`;