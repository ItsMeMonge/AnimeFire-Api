const readlineSync = require('readline-sync');
const puppeteer = require('puppeteer');
// ===========================================================
const animeSearch = readlineSync.question('Nome Do Anime: ');

str = animeSearch.replace(/\s+/g, '-');


const animeName = `https://animefire.net/pesquisar/${str}`;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${animeName}`);

  // Pega todas informações sobre a pesquisa
  const search = await page.evaluate(() => {
    return {
        return: document.querySelector("#body-content > div.container > div").innerText,
    };
  });
  // agora eu tenho que acessar a pagina do json e pegar o link do epsodio

  console.log('Pesquisa:', search);

  await browser.close();

// =================================================================
})();