const fs = require('fs');
const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const urls = [
  'https://item.rakuten.co.jp/hathomes/100169217',
  'https://item.rakuten.co.jp/hathomes/100176317',
  'https://item.rakuten.co.jp/hathomes/100269302',
  'https://item.rakuten.co.jp/hathomes/100276602',
  'https://item.rakuten.co.jp/hathomes/100276603',
  'https://item.rakuten.co.jp/hathomes/100713403'
]

// Download Image
async function downloadImage(url,filepath){
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    });
    response.data.pipe(fs.createWriteStream(filepath));
  } catch (error) {
    console.log(error);
  }
}


// loop through URLS & GET img link
for (const url of urls){
  axios.get(url)
    .then(res=>res.data)
    .then(data=>{
      const document = (new JSDOM(data)).window.document;
      const elements = document.querySelectorAll('.rakutenLimitedId_ImageMain1-3 img');
      return elements
    })
    .then((el)=>{
      const imgLink = [...el].map(link => link.getAttribute('src').split('?')[0])
      const imgName = [...imgLink].map(name => name.split('/').at(-1));
      return {imgLink,imgName}
    })
    .then((data) => {
      data.imgLink.forEach((element, index) => {
        downloadImage(element, data.imgName[index]);
      });
    });
}