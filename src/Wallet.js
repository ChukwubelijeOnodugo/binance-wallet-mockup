import React, { useState, useRef, useEffect } from 'react';
import './Wallet.css';
import icon from './images/icon.svg';
import worldMap from './images/binancemap.svg';
import google from './images/google.svg';
import Modal from 'react-modal';
import step1 from './images/step1.svg';
import step2 from './images/step2.svg';
import vault from './images/vault.svg';
import { RiCloseFill } from 'react-icons/ri';

const Wallet = () => {
    const [home, setHome] = useState(true);
    const [existing, setExisting] = useState(false);
    const [seedPhrase, setSeedPhrase] = useState(false);
    const [hardwareConnect, setHardwareConnect] = useState(false);
    const [safulet, setSafulet] = useState(false);
    const [payload, setPayload] = useState([]);
    const [hover, setHover] = useState(false);
    const [newWallet, setNewWallet] = useState(false);
    const [backupPhrase, setBackupPhrase] = useState(false)

    let item = null;

    if (existing) {
        item = <WalletExisting home={home} setHome={setHome} existing={existing} setExisting={setExisting} seedPhrase={seedPhrase} setSeedPhrase={setSeedPhrase} hardwareConnect={hardwareConnect} setHardwareConnect={setHardwareConnect} safulet={safulet} setSafulet={setSafulet} hover={hover} setHover={setHover} newWallet={newWallet} setNewWallet={setNewWallet} />;
    } else if (seedPhrase) {
        item = <SeedPhrase existing={existing} setExisting={setExisting} seedPhrase={seedPhrase} setSeedPhrase={setSeedPhrase} payload={payload} setPayload={setPayload} hover={hover} setHover={setHover} newWallet={newWallet} backupPhrase={backupPhrase} setBackupPhrase={setBackupPhrase} />
    } else if (hardwareConnect) {
        item = <ConnectHardwareWallet existing={existing} setExisting={setExisting} hardwareConnect={hardwareConnect} setHardwareConnect={setHardwareConnect} hover={hover} setHover={setHover} />
    } else if (safulet) {
        item = <Safulet existing={existing} setExisting={setExisting} safulet={safulet} setSafulet={setSafulet} hover={hover} setHover={setHover} />
    } else if (backupPhrase) {
        item = <BackupPhrase />
    }

    return (
        <main>
            <div className='page-content'>
                {home ? <WalletAdd home={home} setHome={setHome} existing={existing} setExisting={setExisting} newWallet={newWallet} setNewWallet={setNewWallet} /> : item}
            </div>
        </main>
    )
}

const WalletAdd = (props) => {
    return (
        <>
            <span className='world-map'><img src={worldMap} className='map'></img></span>
            <div style={{ textAlign: "left" }}><img src={icon} className='icon'></img></div>
            <h1 className='welcome-message'>Welcome to Binance Wallet</h1>
            <p className='subheading-message'>Secure and trusted multi-chain crypto wallet</p>
            <button type="button" className='button existing-wallet' onClick={() => { props.setExisting(true); props.setHome(false) }}>Use existing wallet</button>
            <button type="button" className='button create-wallet' onClick={() => { props.setNewWallet(true); props.setExisting(true); props.setHome(false) }}>Create wallet</button>
        </>
    )
}

const WalletExisting = (props) => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <button type="button" className='back-button' onClick={() => { props.setHome(true); props.setNewWallet(false); props.setExisting(false); }}>
                <svg fill='rgb(230,232,234)' style={{ margin: "auto" }} viewBox="0 0 11 11"><path d="M4.069 5.25L8.334.919 7.416 0l-5.25 5.25 5.25 5.25.918-.919L4.07 5.25z"></path></svg>
            </button>
            <h1 className='heading'>{props.newWallet ? "Create New Wallet" : "Log in to Binance Wallet"}</h1>
            <h4 className='select-preferred'>Select Your Preferred Method</h4>
            <button type="button" onClick={() => { props.setSeedPhrase(true); props.setExisting(false) }} className='button import-seed-button'><svg fill='rgb(230, 232, 234)' viewBox="0 0 16 16" className="button-icon"><path d="M4.4 4v2.4h-.8c-.855 0-1.6.621-1.6 1.467v6.666C2 15.38 2.745 16 3.6 16h9.6c.855 0 1.6-.621 1.6-1.467V7.867c0-.846-.745-1.467-1.6-1.467h-.8V4a4 4 0 00-8 0zm6.4 0v2.4H6V4a2.4 2.4 0 014.8 0zM3.6 14.4V8h9.6v6.4H3.6zm5.6-3.2a.8.8 0 11-1.6 0 .8.8 0 011.6 0z" clipRule="evenodd"></path></svg>{props.newWallet ? "Generate" : "Import"} Seed Phrase</button>
            <button type="button" onClick={() => { props.setSafulet(true); props.setExisting(false) }} className='button safulet-button'><svg fill='rgb(230, 232, 234)' viewBox="0 0 16 16" className="button-icon"><path fillRule="evenodd" d="M1.2 14.8h13.6V1.2H1.2v13.6zM15.086 16c.505 0 .914-.41.914-.914V.914A.914.914 0 0015.086 0H.914A.914.914 0 000 .914v14.172c0 .505.41.914.914.914h14.172zM5.48 8.296h.593c.245 0 .444-.132.444-.296 0-.163-.199-.296-.444-.296H5.48c.053-.456.227-.874.488-1.223l.239.238a.362.362 0 10.512-.512l-.238-.238c.348-.26.766-.434 1.22-.487v.592c0 .246.133.445.297.445.164 0 .296-.2.296-.445v-.592c.456.053.874.227 1.223.488l-.237.237a.362.362 0 10.512.513l.237-.237c.26.348.434.766.487 1.22h-.592c-.245 0-.444.134-.444.297 0 .164.199.296.444.296h.592a2.523 2.523 0 01-.487 1.222l-.237-.237a.362.362 0 00-.513.512l.238.237a2.522 2.522 0 01-1.223.488v-.592c0-.246-.132-.444-.296-.444-.164 0-.296.198-.296.444v.592a2.52 2.52 0 01-1.222-.487l.239-.239a.362.362 0 10-.513-.512l-.238.239a2.522 2.522 0 01-.488-1.223zm4.846-2.577c.576.588.931 1.393.931 2.281a3.248 3.248 0 01-.973 2.323 3.249 3.249 0 01-2.286.936h-.001a3.26 3.26 0 112.33-5.54zM8 7.111a.889.889 0 100 1.778.889.889 0 000-1.778zm4.4 5.29H3.6l-.017-2h.12A.296.296 0 004 10.103V9.51a.296.296 0 00-.296-.296h-.132L3.548 6.4h.156A.296.296 0 004 6.104V5.51a.296.296 0 00-.296-.296h-.167L3.523 3.6H12.4v8.8zm1.23-10.03V13.63H2.37V10.4h-.296a.296.296 0 01-.296-.296V9.51c0-.163.133-.296.296-.296h.296V6.4h-.296a.296.296 0 01-.296-.296V5.51c0-.163.133-.296.296-.296h.296V2.37h11.26z" clipRule="evenodd"></path></svg>Safulet<span className='beta-tag'>Beta</span></button>
            <button type="button" onClick={() => { props.setHardwareConnect(true); props.setExisting(false) }} className='button connect-hardware-button'><svg fill='rgb(230, 232, 234)' viewBox="0 0 16 16" className="button-icon"><path d="M9.286 9.03l.178-.176-.178-.177-.333-.331-.177-.176-.176.176-1.036 1.038-.948-.947 1.038-1.039.177-.176-.177-.177-.331-.331-.177-.177-.176.177L5.93 7.75l-.95-.95-.178-.177-.177.178-.984.992a3.23 3.23 0 00-.316 4.198L.323 14.992l-.177.177.177.177.331.331.177.177.177-.177 3.001-3.002a3.225 3.225 0 004.197-.313l.993-.987.178-.177-.177-.178-.952-.951L9.286 9.03zM4.804 7.998l3.199 3.2-.48.475-.063.063c-.886.82-2.273.8-3.135-.06a2.264 2.264 0 01.002-3.197l.477-.48zM15.677 1.008l.176-.177-.176-.177-.331-.33-.177-.178-.177.177-3.002 3.002a3.231 3.231 0 00-4.197.313l-.992.988-.178.176.177.178 4.22 4.22.178.177.176-.178.985-.992a3.23 3.23 0 00.316-4.198l3.002-3.001zm-4.005 6.515l-.476.48-3.2-3.2.48-.475.064-.062c.886-.82 2.273-.8 3.135.06.88.881.88 2.314-.002 3.196l-.001.001z"></path></svg>Connect Hardware Wallet</button>
            <div className='divider'><svg fill="rgb(43, 47, 54)" viewBox="0 0 126 1" className="divider-line"><path stroke='rgb(43, 47, 54)' d="M0 .5h126"></path></svg><div className='or'>or</div><svg fill="rgb(43, 47, 54)" viewBox="0 0 126 1" className="divider-line"><path stroke='rgb(43, 47, 54)' d="M0 .5h126"></path></svg></div>
            <span className='small-text'>Continue with tKey via:</span>
            <button type="button" onClick={() => setLoading(true)} className='button vkey-button'><img src={google}></img></button>
            {loading ? <div className="tkey-loader"><div className="bar"></div><div className="bar-2"></div><div className="bar-3"></div><div className="bar-4"></div></div> : null}
        </>
    )
}

const SeedPhrase = (props) => {
    const [error, setError] = useState(false);
    const [input, setInput] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    useEffect(() => {
        if (passwordRef.current.value === confirmPasswordRef.current.value && agreeTerms == true) {
            setToggle(true);
        } else setToggle(false);
    }, [agreeTerms, password, confirmPassword])

    const inputTouched = (event) => {
        setPassword(event.target.value);
        console.log("This worked");
        event.target.parentElement.classList.remove('focus');
        event.target.parentElement.classList.add('written');

        const allWithClass = document.querySelectorAll('.copy');
        const copyArray = Array.from(allWithClass);

        console.log(copyArray);

        copyArray.shift();

        console.log(copyArray);

        if (event.target.value.length >= 8) {
            copyArray[0].classList.add('valid');
        } else {
            copyArray[0].classList.add('invalid');
            copyArray[0].classList.remove('valid');
        }

        if (event.target.value.match(/[A-Z]/)) {
            copyArray[1].classList.add('valid');
        } else {
            copyArray[1].classList.add('invalid');
            copyArray[1].classList.remove('valid');
        }

        if (event.target.value.match(/\d/)) {
            copyArray[2].classList.add('valid');
        } else {
            copyArray[2].classList.add('invalid');
            copyArray[2].classList.remove('valid');
        }

        if (event.target.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)) {
            copyArray[3].classList.add('valid');
        } else {
            copyArray[3].classList.add('invalid');
            copyArray[3].classList.remove('valid');
        }

        if (event.target.value.length >= 8 && event.target.value.match(/[A-Z]/) && event.target.value.match(/\d/) && event.target.value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)) {
            console.log("Yea we here now");
            event.target.parentElement.classList.remove('written');
            event.target.parentElement.classList.add('focus');
        } else event.target.parentElement.classList.add('written');
    }

    const inputCheck = (e) => {
        setConfirmPassword(e.target.value);
        console.log(e.target.value);
        console.log(passwordRef.current.value);
        console.log(e.target.parentElement);
        if (e.target.value === passwordRef.current.value) {
            e.target.parentElement.classList.remove('written');
            e.target.parentElement.classList.add('focus');

        } else {
            e.target.parentElement.classList.remove('focus');
            e.target.parentElement.classList.add('written');

        }
    }

    const handleCheckbox = (e) => {
        console.log('checkbox: ' + e.target.checked);
        setAgreeTerms(e.target.checked);

    }

    const inputFocus = (e) => {
        console.log("This worked");
        e.target.parentElement.classList.add('focus');
    }

    const createWallet = (pass) => {
        console.log(pass);
        setLoading(true);
        setTimeout(() => {
            props.setBackupPhrase(true);
            setLoading(false);
            props.setSeedPhrase(false);
        }, 3000)
    }

    return (
        <>
            <button type="button" className='back-button' onClick={() => { props.setExisting(true); props.setSeedPhrase(false); }}>
                <svg fill='rgb(230,232,234)' style={{ margin: "auto" }} viewBox="0 0 11 11"><path d="M4.069 5.25L8.334.919 7.416 0l-5.25 5.25 5.25 5.25.918-.919L4.07 5.25z"></path></svg>
            </button>
            <h1 className='heading'>{props.newWallet ? "Create New Wallet" : "Import via Seed Phrase"}</h1>
            {props.newWallet ? null : <><div><span className='copy enter-phrase-copy'>Enter your seed phrase to restore your wallet.</span></div>
                <div className='textbox-label'><span>Seed Phrase</span></div>
                <div className='textbox-enclosure'><SeedPhraseTextbox setError={setError} setInput={setInput} setPayload={props.setPayload} /></div>
                <span className='copy word-limit'>Typically 12 words (sometimes 24) separated by single spaces.</span><br />
                {input ? <span className='textbox-error'>{error ? "Invalid seed phrase" : "Seed phrases must contain 12 or 24 words"}</span> : null}</>}
            <div className='textbox-label' style={{ paddingTop: "10px" }}><span>Enter a Strong Password</span></div>
            <div className='input-box'><input ref={passwordRef} onFocus={inputFocus} onChange={inputTouched} type={show ? "text" : "password"} className='clear-input' disabled={!props.newWallet} />{show ? <svg onClick={() => setShow(false)} fill="rgb(230, 232, 234)" viewBox="0 0 24 24" className="eye-icon"><path d="M13.03 15.652l1.712 1.709c-.73.22-1.481.33-2.242.33a7.92 7.92 0 01-5.576-2.299L3 11.505l2.913-2.948 2.393 2.378c-.02.18-.02.35 0 .53a4.23 4.23 0 004.194 4.227c.18 0 .35-.01.53-.04zM22 11.505l-3.934-3.997A7.842 7.842 0 0012.5 5.239c-.76 0-1.512.11-2.242.33l1.711 1.699c.18-.01.35-.01.531 0a4.232 4.232 0 014.234 4.227c0 .78-.21 1.539-.62 2.199L6.434 4 5.022 5.42l11.292 11.272.71.71L18.637 19l1.412-1.41-2.102-2.088L22 11.505z"></path></svg> : <svg onClick={() => setShow(true)} fill="rgb(230, 232, 234)" viewBox="0 0 24 24" className="eye-icon"><path d="M18.076 7.395c-3.083-3.193-8.059-3.193-11.142 0L3 11.44l3.934 4.16c3.073 3.193 8.049 3.203 11.132.01l.01-.01L22 11.44l-3.924-4.045zm-1.422 6.697a5.724 5.724 0 01-8.308 0L5.833 11.44l2.513-2.579c2.302-2.371 6.006-2.371 8.308 0l2.513 2.58-2.513 2.651z"></path><path d="M14.732 11.44c.02 1.28-.96 2.34-2.192 2.362-1.231.02-2.252-.999-2.272-2.278-.02-1.28.96-2.34 2.192-2.36h.04v2.277h2.232z"></path></svg>}</div>
            <span className='copy' id='description'>We will use this password to encrypt your data. You will need this password to unlock your wallet.</span>
            <ul className='validation-messages'>
                <li><span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> 8 or more characters.</span></li>
                <li><span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> At least one upper case character.</span></li>
                <li><span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> At least one digit.</span></li>
                <li><span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> At least one symbol.</span></li>
            </ul>
            <div className='textbox-label'><span>Confirm Password</span></div>
            <div className='input-box'><input ref={confirmPasswordRef} onFocus={inputFocus} onChange={inputCheck} type={show2 ? "text" : "password"} className='clear-input' disabled={!props.newWallet} />{show2 ? <svg onClick={() => setShow2(false)} fill="rgb(230, 232, 234)" viewBox="0 0 24 24" className="eye-icon"><path d="M13.03 15.652l1.712 1.709c-.73.22-1.481.33-2.242.33a7.92 7.92 0 01-5.576-2.299L3 11.505l2.913-2.948 2.393 2.378c-.02.18-.02.35 0 .53a4.23 4.23 0 004.194 4.227c.18 0 .35-.01.53-.04zM22 11.505l-3.934-3.997A7.842 7.842 0 0012.5 5.239c-.76 0-1.512.11-2.242.33l1.711 1.699c.18-.01.35-.01.531 0a4.232 4.232 0 014.234 4.227c0 .78-.21 1.539-.62 2.199L6.434 4 5.022 5.42l11.292 11.272.71.71L18.637 19l1.412-1.41-2.102-2.088L22 11.505z"></path></svg> : <svg onClick={() => setShow2(true)} fill="rgb(230, 232, 234)" viewBox="0 0 24 24" className="eye-icon"><path d="M18.076 7.395c-3.083-3.193-8.059-3.193-11.142 0L3 11.44l3.934 4.16c3.073 3.193 8.049 3.203 11.132.01l.01-.01L22 11.44l-3.924-4.045zm-1.422 6.697a5.724 5.724 0 01-8.308 0L5.833 11.44l2.513-2.579c2.302-2.371 6.006-2.371 8.308 0l2.513 2.58-2.513 2.651z"></path><path d="M14.732 11.44c.02 1.28-.96 2.34-2.192 2.362-1.231.02-2.252-.999-2.272-2.278-.02-1.28.96-2.34 2.192-2.36h.04v2.277h2.232z"></path></svg>}</div>
            <div className='agree-terms'><div className='custom-checkbox'><input onClick={handleCheckbox} type="checkbox" id='agree-terms-checkbox' /><label htmlFor="agree-terms-checkbox" data-testid="label" className="checkbox-label"></label></div><span>I have read and agree to the <a href='' className='terms-of-use-link'>Terms of Use</a></span></div>
            {loading ? <button type="button" className='button import-button' disabled><div className="tkey-loader new-wallet"><div className="bar new-wallet"></div><div className="bar-2 new-wallet"></div><div className="bar-3 new-wallet"></div><div className="bar-4 new-wallet"></div></div></button> : <button onClick={() => { createWallet(password); }} type="button" className='button import-button' disabled={!toggle}>{props.newWallet ? "Continue" : "Import"}</button>}
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
            props.setInput(false);
        }
    }

    return (
        <textarea ref={textboxRef} onChange={handleInput} className='seed-phrase-textbox' />
    )
}

const ConnectHardwareWallet = (props) => {
    const [app, setApp] = useState("Ethereum");
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <button type="button" className='back-button' onClick={() => { props.setExisting(true); props.setHardwareConnect(false); }}>
                    <svg fill='rgb(230,232,234)' style={{ margin: "auto" }} viewBox="0 0 11 11"><path d="M4.069 5.25L8.334.919 7.416 0l-5.25 5.25 5.25 5.25.918-.919L4.07 5.25z"></path></svg>
                </button>
                <span className='connect-heading'>Connect Hardware Wallet</span>
                <div style={{ display: "flex", flexBasis: "24px", flexShrink: "0" }}></div>
            </div>
            <div className='ledger'><svg fill="rgb(230, 232, 234)" viewBox="0 0 131 32" height="32"><path d="M22.491 0H10.222v16.552h16.566V4.282A4.282 4.282 0 0022.49 0zM6.397 0H4.283A4.283 4.283 0 000 4.283v2.114h6.397V0zM0 10.222h6.397v6.397H0v-6.397zM20.444 26.788h2.115a4.284 4.284 0 004.283-4.297v-2.047h-6.398v6.344zM10.222 20.444h6.397v6.398h-6.397v-6.398zM0 20.444v2.115a4.283 4.283 0 004.283 4.283h2.114v-6.398H0zM43.138 1.71h-2.505v23.42H53.9v-2.235h-10.76V1.71zM61.953 7.919c-4.876 0-8.31 3.623-8.31 8.835v.593a8.552 8.552 0 008.498 8.242h.324a9.602 9.602 0 006.222-2.303v-.067l-1.132-1.846-.12.068a7.367 7.367 0 01-4.957 1.98 6.196 6.196 0 01-6.33-6.398h12.66v-.134-1.185c.121-4.755-2.64-7.785-6.855-7.785zm-5.67 6.99a5.549 5.549 0 015.535-4.889c2.115 0 4.431 1.266 4.62 4.889H56.283zM83.502 9.899v.875a5.966 5.966 0 00-5.078-2.896h-.31c-4.484 0-7.582 3.556-7.582 8.768 0 5.212 2.963 8.848 7.38 8.848a6.168 6.168 0 005.617-3.043v2.572h2.37V1.71h-2.397v8.189zm-5.145 13.387c-3.098 0-5.145-2.694-5.145-6.6 0-3.905 2.168-6.532 5.212-6.532 2.519 0 5.078 2.047 5.078 6.532 0 4.862-2.694 6.6-5.199 6.6h.054zM100.404 10.222v.135c-.471-.795-1.912-2.505-5.387-2.505-4.417 0-7.327 3.367-7.327 8.511 0 5.145 3.044 8.633 7.529 8.633a5.602 5.602 0 005.212-2.693v2.316c0 3.233-2.047 5.078-5.683 5.078a9.832 9.832 0 01-4.512-1.064l-.121-.068-.93 2.047.135.068a12.47 12.47 0 005.468 1.347c3.892 0 8.081-1.98 8.081-7.462V8.404h-2.465v1.818zm-4.889 12.673c-3.232 0-5.387-2.505-5.387-6.397 0-3.892 1.845-6.209 5.01-6.209 3.488 0 5.145 2.047 5.145 6.209 0 4.162-1.603 6.397-4.768 6.397zM112.808 7.919c-4.889 0-8.256 3.623-8.256 8.768v.592a8.58 8.58 0 008.579 8.31h.337a9.59 9.59 0 006.195-2.316l-1.145-1.967h-.134a7.342 7.342 0 01-4.943 1.98 6.207 6.207 0 01-5.914-3.932 6.223 6.223 0 01-.43-2.465h12.768v-.135-1.185c0-4.62-2.774-7.65-7.057-7.65zm-5.616 6.99a5.561 5.561 0 015.549-4.889c2.101 0 4.417 1.266 4.606 4.889h-10.155zM130.155 8.242c-.337 0-.593 0-.929-.135A5.658 5.658 0 00124.013 12V8.242h-2.437V25.064h2.505v-7.058a10.46 10.46 0 01.525-3.191c.795-2.573 2.572-4.216 4.687-4.216.264-.027.53-.027.794 0h.135V8.242h-.067z"></path></svg></div>
            <div className='warning-notification'><svg viewBox="0 0 64 64" fill="rgb(240, 185, 11)" font-size="16" className="caution"><path d="M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32zm-2.5-23V13h5v28h-5zm0 10v-5h5v5h-5z" clip-rule="evenodd"></path></svg><span className="warning-message">If you choose the wrong app, please unplug your Ledger device and connect again.</span></div>
            <div className="steps"><div class="number-of-step">1</div><span>Connect Ledger with your PC and open the <b>{app}</b> app in Ledger.</span></div>
            <div style={{ textAlign: "center", marginBottom: "24px" }}><img src={step1}></img></div>
            <div className='steps'><div className='number-of-step'>2</div><span>Select the account you want to view. You can only choose one at a time.</span></div>
            <div style={{ textAlign: "center", marginBottom: "24px" }}><img src={step2}></img></div>
            <button type="button" className='button existing-wallet'>Connect</button>
            <ConnectHardwareModal app={app} setApp={setApp} />
        </>
    )
}

const ConnectHardwareModal = (props) => {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <Modal
                isOpen={toggle}
                onRequestClose={() => setToggle(false)}
                style={{
                    overlay: {
                        backgroundColor: "rgba(11, 14, 17, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    content: {
                        background: "rgb(30, 32, 38)",
                        boxShadow: "rgb(11 14 17) 0px 0px 16px",
                        borderRadius: "1em", border: "none", display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "stretch", padding: '0', height: "auto",
                        width: "50vw",
                        maxHeight: "min(38.75em, 75vh)",
                        maxWidth: "31.25em", margin: "1em", position: 'unset',
                    }
                }}>
                <div className='modal-header'>
                    <div className='network-heading'>Select Network</div>
                    <button type="button" onClick={() => setToggle(false)} className='modal-close-button'><RiCloseFill className='modal-close-icon' /></button>
                </div>
                <div className='modal-body'>
                    <div className='button-group'>
                        <button type="button" onClick={() => { props.setApp("Binance Chain"); setToggle(false) }} className="network-select"><div className="network-name">BNB Beacon Chain Network</div><div className="connection-directive">Open the Binance Chain app for Ledger accounts.</div></button>
                        <button type="button" onClick={() => { props.setApp("Ethereum"); setToggle(false) }} className="network-select"><div className="network-name">BNB Smart Chain Network</div><div className="connection-directive">Open the Ethereum app for Ledger accounts.</div></button>
                        <button type="button" onClick={() => { props.setApp("Ethereum"); setToggle(false) }} className="network-select"><div className="network-name">Ethereum Network</div><div className="connection-directive">Open the Ethereum app for Ledger accounts.</div></button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

const Safulet = (props) => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <button type="button" className='back-button' onClick={() => { props.setExisting(true); props.setSafulet(false); }}>
                    <svg fill='rgb(230,232,234)' style={{ margin: "auto" }} viewBox="0 0 11 11"><path d="M4.069 5.25L8.334.919 7.416 0l-5.25 5.25 5.25 5.25.918-.919L4.07 5.25z"></path></svg>
                </button>
                <span className='connect-heading'>Safulet</span>
                <div style={{ display: "flex", flexBasis: "24px", flexShrink: "0" }}></div>
            </div>
            <div style={{ textAlign: "center", marginBottom: "20px" }}><img src={vault} height="64"></img></div>
            <div className="safulet-heading">Connect your Safulet vault and account with your invitation code.</div>
            <div className='textbox-label'><span>Invitation Code</span></div>
            <div className='input-box'><input type="text" className='clear-input' /></div>
            <div className='textbox-label'><span>Enter a Strong Password</span></div>
            <div className='input-box'><input type="text" className='clear-input' disabled /><svg fill="rgb(230, 232, 234)" viewBox="0 0 24 24" className="eye-icon"><path d="M18.076 7.395c-3.083-3.193-8.059-3.193-11.142 0L3 11.44l3.934 4.16c3.073 3.193 8.049 3.203 11.132.01l.01-.01L22 11.44l-3.924-4.045zm-1.422 6.697a5.724 5.724 0 01-8.308 0L5.833 11.44l2.513-2.579c2.302-2.371 6.006-2.371 8.308 0l2.513 2.58-2.513 2.651z"></path><path d="M14.732 11.44c.02 1.28-.96 2.34-2.192 2.362-1.231.02-2.252-.999-2.272-2.278-.02-1.28.96-2.34 2.192-2.36h.04v2.277h2.232z"></path></svg></div>
            <span className='copy description'>We will use this password to encrypt your data. You will need this password to unlock your wallet.</span>
            <ul className='validation-messages'>
                <li><span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> 8 or more characters.</span></li>
                <li><span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> At least one upper case character.</span></li>
                <li><span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> At least one digit.</span></li>
                <li><span className='copy'><svg className='invalid-input-icon' fill="rgb(118, 128, 143)" viewBox="0 0 10 10"><path d="M0 5c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm1 0c0 2.205 1.795 4 4 4s4-1.795 4-4-1.795-4-4-4-4 1.795-4 4zm6.295 1.59L5.705 5l1.59-1.59-.705-.705L5 4.295l-1.59-1.59-.705.705L4.295 5l-1.59 1.59.705.705L5 5.705l1.59 1.59.705-.705z"></path></svg> At least one symbol.</span></li>
            </ul>
            <div className='textbox-label'><span>Confirm Password</span></div>
            <div className='input-box'><input type="text" className='clear-input' disabled /><svg fill="rgb(230, 232, 234)" viewBox="0 0 24 24" className="eye-icon"><path d="M18.076 7.395c-3.083-3.193-8.059-3.193-11.142 0L3 11.44l3.934 4.16c3.073 3.193 8.049 3.203 11.132.01l.01-.01L22 11.44l-3.924-4.045zm-1.422 6.697a5.724 5.724 0 01-8.308 0L5.833 11.44l2.513-2.579c2.302-2.371 6.006-2.371 8.308 0l2.513 2.58-2.513 2.651z"></path><path d="M14.732 11.44c.02 1.28-.96 2.34-2.192 2.362-1.231.02-2.252-.999-2.272-2.278-.02-1.28.96-2.34 2.192-2.36h.04v2.277h2.232z"></path></svg></div>
            <div className='agree-terms'><div className='custom-checkbox'><input type="checkbox" id='agree-terms-checkbox' /><label for="agree-terms-checkbox" data-testid="label" className="checkbox-label"></label></div><span>I have read and agree to the <a href='' className='terms-of-use-link'>Terms of Use</a></span></div>
            <button type="button" className='button import-button' disabled>Connect</button>
        </>
    )
}

const BackupPhrase = () => {
    return (
        <>
            <div>
                <p>Back Up Your Seed Phrase</p>
            </div>
            <div className="">
                <div className="">earth</div>
                <div className="">name</div>
                <div className="">spatial</div>
                <div className="">pact</div>
                <div className="">protect</div>
                <div className="">pave</div>
                <div className="">eye</div>
                <div className="">winner</div>
                <div className="">bitter</div>
                <div className="">draft</div>
                <div className="">grant</div>
                <div className="">claw</div>
            </div>
        </>
    )
}

export default Wallet;