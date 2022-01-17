const readlineSync = require('readline-sync');
const puppeteer = require('puppeteer');
const { json } = require('express/lib/response');
// ===========================================================

// const animeSearch = readlineSync.question('Nome Do Anime: ');


// str = animeSearch.replace(/\s+/g, '-');

const animeName = `https://animefire.net/animes/sasaki-to-miyano-todos-os-episodios`;
// const animeName = `https://animefire.net/video/toradora/25?tempsubs=0&1642383060`;

async function teste (){
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto(`${animeName}`);

  await page.waitFor('.divNumEp');
    // Pega todas informações sobre a pesquisa
  const search = await page.evaluate(() => {
    return {
    //  return: document.querySelector("body > pre").innerText,
    async function(){
      for(const u of [...document.querySelectorAll('.divNumEp')].map(e => e.href.replace('animes', 'video')+'?tempsubs=0&1642383060')) {
        const jsonData = await fetch(u).then(async e => await e.json());
          console.log(jsonData);
          req: jsonData
          await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
  
    
    


    //  return: [...document.querySelectorAll('.divNumEp')].map(e => e.href.replace('animes', 'video')+'?tempsubs=0&1642383060'),
    };
    // [...document.querySelectorAll('.divNumEp')].map(e => e.href.replace('animes', 'video')+'?tempsubs=0&1642383060').join(', ')
  });
  // agora eu tenho que acessar a pagina do json e pegar o link do epsodio

  console.log('Pesquisa:', search.function);

  await browser.close();
// =================================================================
};
teste()