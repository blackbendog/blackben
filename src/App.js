import logo from './assets/logo.png';
import menuTelegram from './assets/menuTelegram.svg';
import menuTwitter from './assets/menuTwitter.svg';
import heroGyro from './assets/heroGyro.png';
import line from './assets/heroLine.png';
import aboutImg from './assets/about.png';
import symbolGLeft from './assets/symbolGLeft.png';
import symbolGRight from './assets/symbolGRight.png';
import video from './assets/video.mp4';
import staking from './assets/staking.png';
import cc from './assets/cc.png';
import vault from './assets/vault.png';
import tokenomics from './assets/tokenomics.png';
import React, { useState, useEffect } from 'react';
import Loader from './components/Lodaer';
import './App.css';


function App() {
  const ticker = "$BRADDOG";
  const contract = "TBA"
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
    }
  };


  useEffect(() => {
    // Simulate loading time with progress (you can replace this with actual data fetching or other async operations)
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 20 : 100));
    }, 300);

    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 1800); // Adjust the duration as needed

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      <Loader loading={loading} progress={progress} />
      <div className="hero" id="hero">
        <div className="header">
          <div className="header-inside">
            <div className="logo-block">
              <img alt="logo" className="logo-header" src={logo}/>
            </div>
            <div className="menu-block">
              <ul>
                <li onClick={() => scrollToSection('hero')}><b>BUY {ticker}</b></li>
                <li onClick={() => scrollToSection('about')}><b>ABOUT</b></li>
                <li onClick={() => scrollToSection('tokenomics')}><b>TOKENOMICS</b></li>
              </ul>
              <div className="socials-block">
                <a href="https://t.me/BradTheDog" target="_blank" rel="noreferrer"><img className="socials-block-img" alt="telegram" src={menuTelegram}/></a>
                <a href="https://twitter.com/Brad_the_dog" target="_blank" rel="noreferrer"><img className="socials-block-img" alt="twitter" src={menuTwitter}/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-section">
          <div className="section-inside">
          <div className="imgBlock">
            <img alt="BRED THE DOG" className="gyro" src={heroGyro}/>
          </div>
          <div className="textBlock">
            <div className="lineBlock">
              <img alt="line" className="line" src={line}/>
            </div>
            <div className="headingBlock">
              <h1 className="heading">
              WASSUP<br/> FOOL
              </h1>
              <p className="mainDescription">Gimme that bike bitch <br/>
              I'm too fat for this shit!©</p>
            </div>
            <div className="buttonBlock">
              <button className="mainButton button">BUY {ticker}</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="about" id="about">
        <div className="about-inside">
          <div className="aboutTextBlock">
            <h2 className="subheading">
              About {ticker}
            </h2>
            <p className="description">
            In 4 February 2022, a popular streamer named IShowSpeed regularly played this game, becoming a famous meme on the internet due to his overwhelming and funny rivalry roleplay with Talking Ben. The meme mostly shows Darren asking Ben heavy topical questions on a telephone such as, if he loves God, if he supports LGBTQ+, does he support Black Lives Matter, etc.
            </p>
          </div>
          <div className="aboutImgBlock">
            <img alt="about" src={aboutImg}/>
          </div>
        </div>
      </div>
      <div className="cinema">
        <img alt="giraffes" className="giraffeSymb" src={symbolGLeft}/>
        <div className="cinemaBlock">
        <video width="600" height="380" controls>
          <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
          <h2 className="subheading utilText">
            Utilities
          </h2>
        </div>
        <img alt="giraffes" className="giraffeSymb" src={symbolGRight}/>
      </div>
      <div className="utilities">
        <div className="utilities-inside">
          <div className="items">
            <div className="util-item">
              <img alt="staking" src={staking}/>
              <h2 className="subheading">
                Personality
              </h2>
              <p className="description2">        
              Ben's Black cousin is an internet-obsessed meme-lord who contends most of his time to the internet.
              </p>
              <h3 className="upcomming">
                BRAD
              </h3>
            </div>
            <div className="util-item">
              <img alt="staking" src={cc}/>
              <h2 className="subheading">
                History
              </h2>
              <p className="description2">
              Ben's Black cousin had a fairly normal childhood, where he raised by his two parents inside a medium-sized household.
              </p>
              <h3 className="upcomming">
                BRAD
              </h3>
            </div>
            <div className="util-item">
              <img alt="staking" src={vault}/>
              <h2 className="subheading">
                Popularity
              </h2>
              <p className="description2">
              Since then, he has expanded his accounts across multiple platforms, and has reach a total of 600k subscribers.
              </p>
              <h3 className="upcomming">
                BRAD
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="tokenomics" id="tokenomics">
        <div className="tokenomics-inside">
          <div className="tokenImg">
            <img alt="tokenomics" src={tokenomics}/>
          </div>
          <div className="tokenText">
            <h2 className="subheading">
              TOKENOMICS
            </h2>
            <div className="input">
              <h3 className="upcomming">Token Contract: </h3><p className="inputDesc">{contract}</p>
            </div>
            <div className="input">
              <h3 className="upcomming">TICKER: </h3><p className="inputDesc">{ticker}</p>
            </div>
            <div className="input">
              <h3 className="upcomming">SUPPLY: </h3><p className="inputDesc">7.000.000</p>
            </div>
            <div className="input">
              <h3 className="upcomming">TAX: </h3><p className="inputDesc">BUY - 0% | SELL - 0%</p>
            </div>
            <div className="input">
              <h3 className="upcomming">MINT REVOKE: </h3><p className="inputDesc">REVOKED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
