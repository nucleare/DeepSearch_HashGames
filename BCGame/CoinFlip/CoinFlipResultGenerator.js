import CryptoJS from 'crypto-js'

function getHashString (serverSeed, clientSeed, nonce, round) {
    const resultArr = [clientSeed, nonce, round];
    const hmacSha256Result = CryptoJS.HmacSHA256(resultArr.join(":"), serverSeed).toString();
    return hmacSha256Result;
}

function getHashResultNumber (hashResult) {
    let res = {dec: [], hex: []};
    for (let i = 0; i < hashResult.length; i += 2) {
        let dext = parseInt(hashResult.substr(i, 2), 16)
        res.hex.push(dext)  
    }
    return res;
}

function getResult (resultList) {
    const firstStep = resultList[0]/(Math.pow(256, 1));
    const secondStep = resultList[1]/(Math.pow(256, 2));
    const thirdStep = resultList[2]/(Math.pow(256, 3));
    const fourthStep = resultList[3]/(Math.pow(256, 4));
    const resultStep = (firstStep + secondStep + thirdStep + fourthStep) * 2;
    const result = Math.floor(resultStep);
    return {
        clscList: [firstStep.toFixed(9), secondStep.toFixed(9), thirdStep.toFixed(9), fourthStep.toFixed(9)],
        resultStep: resultStep.toFixed(9),
        result
    }
}

function CoinFlip (serverSeed, clientSeed, round, nonce) {
    const hashString = getHashString(serverSeed, clientSeed, nonce, round)
    const hashResultNumber = getHashResultNumber(hashString)
    return getResult(hashResultNumber.hex)
}

const fs = require('fs')
  let inputFile
  let outputFile

// Modify to take input and output file from command line argument
process.argv.forEach((val, index) => {
  if (index === 2) {
inputFile = val
  }
  if (index === 3) {
outputFile = val
  }
})

const data = fs.readFileSync(inputFile, 'utf-8')
const lines = data.split('\n')

const outputData = []
  for (const line of lines) {
    if (line.trim().length === 0) continue

const inputs = line.split(',')
const serverSeed = inputs[0].trim()
const clientSeed = inputs[1].trim()
const rounds = parseInt(inputs[2].trim(), 10)

for (let nonce = 1; nonce <= 1000; nonce++) {
  const results = CoinFlip(serverSeed, clientSeed, rounds, nonce)
    outputData.push(${serverSeed},${clientSeed},${nonce},${results})
    }
    }

fs.writeFileSync(outputFile, outputData.join('\n'))

