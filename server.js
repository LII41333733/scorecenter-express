const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4064b95643d24a48a9b28a7ad95f81e4');
var MySportsFeeds = require("mysportsfeeds-node");
var msf = new MySportsFeeds("2.0", true);
msf.authenticate("3c05ee98-ad49-4e16-b24e-46c9b5", "MYSPORTSFEEDS");
var data = msf.getData('nfl', '2018-2019-regular', 'players', 'json', {team: "PHI", rosterstatus: "assigned-to-roster", position: "G"});
console.log(data)

var fs = require('fs');
var obj;
fs.readFile('./results/players-nfl-2018-2019-regular.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  obj["players"].forEach(player => {
    console.log(`${["player"]["firstName"]}`)
  })
});



// // request Request 
// (function(callback) {{ '{' }}
//     'use strict';
        
//     const httpTransport = require('https');
//     const responseEncoding = 'utf8';
//     const httpOptions = {{ '{' }}
//         hostname: 'www.mysportsfeeds.com',
//         port: '443',
//         path: {{ 'https://api.mysportsfeeds.com/v2.0/pull/nfl/players.json' }},
//         method: 'GET',
//         headers: {{ '{' }}"Authorization":"Basic " + btoa({{ '3c05ee98-ad49-4e16-b24e-46c9b5' }} + ":" + MYSPORTSFEEDS)}
//     {{ '}' }};
//     httpOptions.headers['User-Agent'] = 'node ' + process.version;
 
//     const request = httpTransport.request(httpOptions, (res) => {{ '{' }}
//         let responseBufs = [];
//         let responseStr = '';
        
//         res.on('data', (chunk) => {{ '{' }}
//             if (Buffer.isBuffer(chunk)) {{ '{' }}
//                 responseBufs.push(chunk);
//             {{ '}' }}
//             else {{ '{' }}
//                 responseStr = responseStr + chunk;            
//             {{ '}' }}
//         {{ '}' }}).on('end', () => {{ '{' }}
//             responseStr = responseBufs.length > 0 ? 
//                 Buffer.concat(responseBufs).toString(responseEncoding) : responseStr;
            
//             callback(null, res.statusCode, res.headers, responseStr);
//         {{ '}' }});
        
//     {{ '}' }})
//     .setTimeout(0)
//     .on('error', (error) => {{ '{' }}
//         callback(error);
//     {{ '}' }});
//     request.write("")
//     request.end();
    

// {{ '}' }})((error, statusCode, headers, body) => {{ '{' }}
//     console.log('ERROR:', error); 
//     console.log('STATUS:', statusCode);
//     console.log('HEADERS:', JSON.stringify(headers));
//     console.log('BODY:', body);
// {{ '}' }});

// https://api.mysportsfeeds.com/v2.0/pull/nfl/players.json
// newsapi.v2.everything({
//  q: 'philadelphia eagles',
//  pageSize: 100,
//  sortBy: 'publishedAt',
//  language: 'en'
// }).then((response, err) => {
//  if (err) throw err;

 // response.articles.forEach(article => {
 //  // console.log(article.title)
 //  if (article.title.includes("Eagles")) {
 //   console.log(article);
 //  }
 // })


 // console.log(response);
 /*
   {
     status: "ok",
     articles: [...]
   }
 */



// });

// $
//  .ajax(
//   {
//    url: "wrongfile.txt",
//    Authorization: "Basic 3c05ee98-ad49-4e16-b24e-46c9b5:MYSPORTSFEEDS",
//    error: function(err){ if (err) throw err},
//    success: function(result) {
//      console.log(result);
//    }
//   });
 