const readlineSync = require('readline-sync');
const puppeteer = require('puppeteer');
// ===========================================================
const animeSearch = readlineSync.question('Nome Do Anime: ');
str = animeSearch.replace(/\s+/g, '-');

const animeName = 'https://animefire.net/animes/'+`${str}`+'-todos-os-episodios';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${animeName}`);

  // Pega todas informações sobre o anime
  const anime = await page.evaluate(() => {
    return {

      Nome: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.divMainNomeAnime > div.main_div_anime_info > div > div.d-flex.justify-content-between > div.mr-2.d-inline-block.div_anime_names > h1").innerText,
      
      Imagem: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.divMainNomeAnime > div.row.mx-2.mt-md-2.divImgAnimePageInfo > div > img").dataset.src,

      Categorias: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.divMainNomeAnime > div.main_div_anime_info > div > div.divAnimePageInfo.ml-2.ml-sm-0.d-none > div:nth-child(1)").innerText,

      Ano: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.divMainNomeAnime > div.main_div_anime_info > div > div.divAnimePageInfo.ml-2.ml-sm-0.d-none > div:nth-child(15) > span").innerText,

      Episodios: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.divMainNomeAnime > div.main_div_anime_info > div > div.divAnimePageInfo.ml-2.ml-sm-0.d-none > div:nth-child(9) > span").innerText,

      Status: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.divMainNomeAnime > div.main_div_anime_info > div > div.divAnimePageInfo.ml-2.ml-sm-0.d-none > div:nth-child(11)").innerText,

      Sinopse: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.d-inline-block > div > div > span").innerText,      
      
    };
  });

  console.log('anime:', anime);

  await browser.close();
})();



