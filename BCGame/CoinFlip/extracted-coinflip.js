// work in progress

import hmacSHA256 from 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/hmac-sha256.js';


    function getHashString (serverSeed, clientSeed, nonce, round) {
      const resultArr = [clientSeed, nonce, round];
      const hmacSha256Result = String(CryptoJS.HmacSHA256(resultArr.join(":"), serverSeed));
      return hmacSha256Result;
    }

    function getHashResultNumber (hashResult) {
      let res = {dec: [], hex: []};
      for (let i = 0; i < hashResult.length; i += 2) {
        let dext = hashResult[i] + hashResult[i + 1]
        let hext = parseInt(dext, 16)
        res.dec.push(dext)  
        res.hex.push(hext)
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

    function CoinFLip () {
      const [state, setState, bind] = useInputControl({
        clientSeed: qs.c||'',
        serverSeed: qs.s||'',
        nonce: parseInt(qs.n)||'',
        round: parseInt(qs.r)||10
      });
        return (
        const hmacSha256Result = getHashString(state.serverSeed, state.clientSeed, state.nonce, index+1);
        const resultList = getHashResultNumber(hmacSha256Result);
        const finalResult = getResult(resultList.hex);
        return finalResult
        )
    };


                        
                            

                        
                                                         
