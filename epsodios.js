const readlineSync = require('readline-sync');
const puppeteer = require('puppeteer');
// ===========================================================
const animeSearch = readlineSync.question('Nome Do Anime: ');
str = animeSearch.replace(/\s+/g, '-');

const epsodio = readlineSync.question('Numero Do Epsodio: ')
const animeName = `https://animefire.net/animes/${str}/${epsodio}`;


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${animeName}`);

  // Pega todas informações sobre o anime
  const anime = await page.evaluate(() => {
    return {
        teste: document.querySelector("#my-video").dataset.videoSrc.substring(21),
    };
  });
  // agora eu tenho que acessar a pagina do json e pegar o link do epsodio

  //console.log('anime:', anime);

  await browser.close();

// =================================================================

    const arowser = await puppeteer.launch();
    const aage = await arowser.newPage();
    await aage.goto(`https://animefire.net/${anime.teste}`);

    // Pega todas informações sobre o anime
    const link_json = await aage.evaluate(() => {
      return {
          teste: document.querySelector("body > pre").innerText,
      };
    });
    // agora eu tenho que acessar a pagina do json e pegar o link do epsodio
  
    console.log('epsodio:', link_json);
  
    await arowser.close();
})();