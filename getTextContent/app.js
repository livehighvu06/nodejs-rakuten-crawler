const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


// loop through URLS & GET img link

const getTxt =(data)=>{
  const document =(new JSDOM(data)).window.document;
  const elements =document.querySelector('.item_number');
  return elements.textContent
}

const getData = async (url)=>{
  try{
    const res = await axios.get(url);
    console.log(getTxt(res.data));
  }catch(err){
    console.log(`error : ${url}`);
  }
}

~async function(){
  const urls = [
    'https://item.rakuten.co.jp/x-plosion/10000008/',
    'https://item.rakuten.co.jp/x-plosion/10000001/',
    'https://item.rakuten.co.jp/x-plosion/10000010/',
    'https://item.rakuten.co.jp/x-plosion/10000009/',
    'https://item.rakuten.co.jp/x-plosion/10000002/',
    'https://item.rakuten.co.jp/x-plosion/10000012/',
    'https://item.rakuten.co.jp/x-plosion/10000011/',
    'https://item.rakuten.co.jp/x-plosion/wpcfl-bb-300/',
    'https://item.rakuten.co.jp/x-plosion/wpcfl-bo-300/',
    'https://item.rakuten.co.jp/x-plosion/wpcfl-mo-300/',
    'https://item.rakuten.co.jp/x-plosion/wpcfl-apm-300/',
    'https://item.rakuten.co.jp/x-plosion/wpcfl-mel-300/',
    'https://item.rakuten.co.jp/x-plosion/wpcfl-fran-300/',
    'https://item.rakuten.co.jp/x-plosion/wpcfl-me-300/',
    'https://item.rakuten.co.jp/x-plosion/wpcfl-pe-300/',
    'https://item.rakuten.co.jp/x-plosion/10000005/',
    'https://item.rakuten.co.jp/x-plosion/10000248/',
    'https://item.rakuten.co.jp/x-plosion/10000231/',
    'https://item.rakuten.co.jp/x-plosion/wpcfl-cam-300/',
    'https://item.rakuten.co.jp/x-plosion/10000263/',
    'https://item.rakuten.co.jp/x-plosion/wpcfl-z-co-300/',
    'https://item.rakuten.co.jp/x-plosion/wpcfl-z-cocoa-300/',
  ];
  for (const url of urls){
    await getData(url);
  }
}()


