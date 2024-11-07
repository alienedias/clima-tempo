const chaveApi = "b59ddc2f130046dd9d8183013240711";
const botaoBusca = document.querySelector(".button-busca");

botaoBusca.addEventListener("click", async () => {
  const cidade = document.getElementById("input-busca").value;

  if (!cidade) return;

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveApi}&q=${cidade}&aqi=no&lang=pt`;
  const resposta = await fetch(apiUrl);

  if (resposta.status !== 200) return;

  const dados = await resposta.json();

  const temperatura = Math.round(dados.current.temp_c);
  const umidade = dados.current.humidity;
  const condicao = dados.current.condition.text;
  const velocidadeDoVento = dados.current.wind_kph;
  const iconeCondicao = dados.current.condition.icon;

  document.getElementById("cidade").textContent = cidade;
  document.getElementById("temperatura").textContent = `${temperatura} °C`;
  document.getElementById("umidade").textContent = `${umidade} %`;
  document.getElementById("condicao").textContent = condicao;
  document.getElementById(
    "velocidade-do-vento"
  ).textContent = `${velocidadeDoVento} km/h`;
  document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);
});
