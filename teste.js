const readlineSync = require('readline-sync');
const puppeteer = require('puppeteer');
// ===========================================================

// const animeSearch = readlineSync.question('Nome Do Anime: ');


// str = animeSearch.replace(/\s+/g, '-');

const animeName = `https://animefire.net/animes/toradora-todos-os-episodios`;
// const animeName = `https://animefire.net/video/toradora/25?tempsubs=0&1642383060`;

async function teste (){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://animefire.net/video/toradora/1?tempsubs=0&1642383060');

  // Pega todas informações sobre a pesquisa
  const search = await page.evaluate(() => {
    return {
     return: document.querySelector("body > pre").innerText,
    //  return: [...document.querySelectorAll('.divNumEp')].map(e => e.href.replace('animes', 'video')+'?tempsubs=0&1642383060'),
    };
  });
  // agora eu tenho que acessar a pagina do json e pegar o link do epsodio

  console.log('Pesquisa:', search);

  await browser.close();
// =================================================================
};
teste()