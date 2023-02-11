// This is the raw source code from the provably fair checker found at 
// https://bcgame-project.github.io/verify/coinflip.html?s=18fbbc01bbad8823f5a2e2380574119d61d6ae8d5ae1385761ac08a53fe813e8&c=ff00ff00ff00ff&n=139&r=7
// Which we need to pull the calculation code from
// and will be what is used in extracted-coinflip.js

    let qs = tools.queryString();
    let { useEffect, useMemo } = React;
    const { useSetState } = hooks;
    function useInputControl (initState) {
      const [state, setState] = useSetState(initState);
      const bind = key => ({
        value: state[key],
        onChange: v => setState({[key]: v})
      });
      return [
        state,
        setState,
        bind
      ];
    }
    
    function Input ({value, onChange, ...others}) {
      return (
        <div class="form-group">
          <input value={value}
            onChange={e => onChange(e.target.value)}
            class="form-control"
            {...others}
          />
        </div>
      );
    }

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
        <div className="main">
          <h1 className="text-center pb-5">CoinFlip verify</h1> 
          <hr />
          <h2 class="text-center">Input</h2>
          <form className="py-5">
            <Input placeholder="Server Seed" {...bind('serverSeed')} />
            <Input placeholder="Client Seed (Hashed)" {...bind('clientSeed')} />
            <Input placeholder="Nonce" {...bind('nonce')} />
            <Input placeholder="Rounds" {...bind('round')} />
          </form>
          <h2 class="text-center">Output</h2>
          <form className="py-5">
            {
              Array(state.round).fill(1).map((item, index) => {
                const hmacSha256Result = getHashString(state.serverSeed, state.clientSeed, state.nonce, index+1);
                const resultList = getHashResultNumber(hmacSha256Result);
                const finalResult = getResult(resultList.hex);
                return (
                  <div className="round-item" key={"round-" + index}>
                    <p className="t">Round: {index + 1}</p>
                    <p>hmac_sha256(client_seed:nonce:round, server_seed)</p>
                    <div className="table-wrap">
                      <table className="table table-sm table-bordered">
                        <tbody>
                          {[resultList.dec,resultList.hex].map((list, listIndex) => {
                            return (
                              <tr key={"tr-" + listIndex}>
                                {list.map((item ,index) => {
                                  return (
                                    <td key={"td-" + index}>{item}</td>
                                  )
                                })}
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                    <h6>Bytes to Number</h6>
                    <div class="form-group">
                      <div>{`(${resultList.hex[0]}, ${resultList.hex[1]}, ${resultList.hex[2]}, ${resultList.hex[3]}) -> [0, ... 4] = `}<span className="text-success">{finalResult.result}</span></div>
                      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span> {finalResult.clscList[0]}&nbsp;&nbsp;&nbsp;&nbsp;</span><span>({resultList.hex[0]} / (256 ^ 1))</span></div>
                      <div><span>+&nbsp;&nbsp;&nbsp;&nbsp;</span><span>{finalResult.clscList[1]}&nbsp;&nbsp;&nbsp;&nbsp;</span><span>({resultList.hex[1]} / (256 ^ 2))</span></div>
                      <div><span>+&nbsp;&nbsp;&nbsp;&nbsp;</span><span>{finalResult.clscList[2]}&nbsp;&nbsp;&nbsp;&nbsp;</span><span>({resultList.hex[2]} / (256 ^ 3))</span></div>
                      <div><span>+&nbsp;&nbsp;&nbsp;&nbsp;</span><span>{finalResult.clscList[3]}&nbsp;&nbsp;&nbsp;&nbsp;</span><span>({resultList.hex[3]} / (256 ^ 4))</span></div>
                      <div><span>=&nbsp;&nbsp;&nbsp;&nbsp;</span><span>{finalResult.resultStep}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>(* 2)</div>
                      <div><span>=&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="text-success">{finalResult.result}</span></div>
                    </div>
                    </div>
                )
              })
            }
          </form>
        </div>
      );
    }
    
    ReactDOM.render(<CoinFLip />, document.getElementById("app"));
