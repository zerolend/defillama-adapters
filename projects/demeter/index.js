const { get } = require('../helper/http')

async function fetch() {
  let results = await get('https://api.deotoken.com/api/demeter/supply-data');
  if(results.tvl > 1e9){
    throw new Error(">1bn")
  }
  return results.tvl;
}

module.exports = {
  sora: {
    fetch
  },
  fetch
}