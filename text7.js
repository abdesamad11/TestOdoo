//Test 7: Any language (2/20)
//You have a huge file named "data.bin" that does not fit in memory; code a program that deletes every 7th byte of it. truncate can be used to change its size.



//NodeJS
 

const fs = require('fs')
 
function copyAndReduce (filename) {
    // set maxsize of chunk as multiple of 7 so we stay in sync
    const read = fs.createReadStream(__dirname + '/' + filename, {highWaterMark: 7 * 8 * 1024})
    const write = fs.createWriteStream('reduced' + filename)
 
    read.on('data', chunk => {
        const chunkLen = chunk.length
        console.log('orig length: ',chunkLen)
         let chunksArr = [] 
 
 
          for(i = 0; i < chunkLen;i = i + 8){
              chunksArr.push(chunk.subarray(i, i + 7))
           }
           reducedChunk = Buffer.concat(chunksArr)
           console.log(reducedChunk.length)
           write.write(reducedChunk)
        })
 
 
    read.on('end', e => {
        if (e) console.log('Error: ',e);
        console.log('finished');
 
    } );
 
 
 
    }
 