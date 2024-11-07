const chaveApi = "b59ddc2f130046dd9d8183013240711";
const botaoBusca = document.querySelector(".button-busca");

botaoBusca.addEventListener("click", async () => {
  const cidade = document.getElementById("input-busca").value;

  if (!cidade) return;

  const respostaApi = await buscarDadosDeClima(chaveApi, cidade);

  exibirDadosDeClima(respostaApi, cidade);
});

async function buscarDadosDeClima(chaveApi, cidade) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveApi}&q=${cidade}&aqi=no&lang=pt`;
  const resposta = await fetch(apiUrl);

  if (resposta.status !== 200) return;

  return await resposta.json();
}

function exibirDadosDeClima(respostaApi, cidade) {
  const temperatura = Math.round(respostaApi.current.temp_c);
  const umidade = respostaApi.current.humidity;
  const condicao = respostaApi.current.condition.text;
  const velocidadeDoVento = respostaApi.current.wind_kph;
  const iconeCondicao = respostaApi.current.condition.icon;

  document.getElementById("cidade").textContent = cidade;
  document.getElementById("temperatura").textContent = `${temperatura} °C`;
  document.getElementById("umidade").textContent = `${umidade} %`;
  document.getElementById("condicao").textContent = condicao;
  document.getElementById(
    "velocidade-do-vento"
  ).textContent = `${velocidadeDoVento} km/h`;
  document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);
}
