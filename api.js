

async function GetEpisodes () {
  const readlineSync = require('readline-sync');
  const puppeteer = require('puppeteer');
  // ===========================================================
  const animeSearch = readlineSync.question('Nome Do Anime: ');
  str = animeSearch.replace(/\s+/g, '-');
  
  const epsodio = readlineSync.question('Numero Do Epsodio: ')
  const animeName = `https://animefire.net/animes/${str}/${epsodio}`;
  

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
          episodio: document.querySelector("body > pre").innerText,
      };
    });
    // agora eu tenho que acessar a pagina do json e pegar o link do epsodio
  
    console.log('epsodio:', link_json);
  
    await arowser.close();
};

async function GetInfoAnime (){

  const readlineSync = require('readline-sync');
  const puppeteer = require('puppeteer');
  // ===========================================================
  const animeSearch = readlineSync.question('Nome Do Anime: ');
  str = animeSearch.replace(/\s+/g, '-');
  
  const animeName = 'https://animefire.net/animes/'+`${str}`+'-todos-os-episodios';
  

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${animeName}`);



  // Pega todas informações sobre o anime
  const anime = await page.evaluate(() => {
    return {

      Nome: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.divMainNomeAnime > div.main_div_anime_info > div > div.d-flex.justify-content-between > div.mr-2.d-inline-block.div_anime_names > h1").innerText,
      
      Imagem: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.divMainNomeAnime > div.row.mx-2.mt-md-2.divImgAnimePageInfo > div > img").dataset.src,

      Categorias: [...document.querySelectorAll(".spanGeneros")].map(e => e.innerText).join(",").toLowerCase(),

      Ano: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.divMainNomeAnime > div.main_div_anime_info > div > div.divAnimePageInfo.ml-2.ml-sm-0.d-none > div:nth-child(15) > span").innerText,

      Episodios: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.divMainNomeAnime > div.main_div_anime_info > div > div.divAnimePageInfo.ml-2.ml-sm-0.d-none > div:nth-child(9) > span").innerText,

      Status: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.divMainNomeAnime > div.main_div_anime_info > div > div.divAnimePageInfo.ml-2.ml-sm-0.d-none > div:nth-child(11)").innerText,

      Sinopse: document.querySelector("#body-content > div.container.mt-5 > div > div.col-lg-9.text-white.divDivAnimeInfo > div.d-inline-block > div > div > span").innerText,      
      
    };
  });

  console.log('anime:', anime);

  await browser.close();
};

GetInfoAnime()

