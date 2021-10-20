
import logoMastercraft from '../../assets/images/logo-mastercraft.svg';
import iconBookmark from '../../assets/images/icon-bookmark.svg';
// import iconBookmarked from './images/obojeni-krug.png';
import { useGlobalContext } from '../../context/GlobalContext';
import { useEffect, useRef, useState } from 'react';

export default function Main() {

    const {setShowModal} = useGlobalContext();
    const {totalMoney} = useGlobalContext();
    const {totalBackers} = useGlobalContext();
    const {bambooStand} = useGlobalContext();
    const {blackEditionStand} = useGlobalContext();
    const {mahagonySpecialEdition} = useGlobalContext();

    const [isBookmarked, setIsBookmarked]= useState(false);
    const bar = useRef(null);

    useEffect(() => {
      const loaded = (totalMoney / 100000) * 100;
      if (bar.current) {
        bar.current.style.width = `${loaded}%`;
      }
    }, [totalMoney]);

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
    <main>
    
        <section className="first">
          <div className="upper-img">
            <img src={logoMastercraft} alt="logoMastercraft"/>
          </div>
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>A beautiful a handcrafted monitor stand to reduce neck and eye strain.</p>
          <div className="buttons">
            <button className="back" onClick={() => setShowModal(true)}>Back this project</button>
            <div className={isBookmarked ?"bookmark bookmark-active" : "bookmark"} onClick={() => setIsBookmarked(prev => !prev)}><img src={iconBookmark} alt="bookmark"/><span>Bookmark</span></div>
          </div>
        </section>
    
        <section className="second">
          <article>
            <p className="nums">${numberWithCommas(totalMoney)}</p>
            <p className="description">of $100,000 backed</p>
          </article>
          <hr/>
          <article>
            <p className="nums">{numberWithCommas(totalBackers)}</p>
            <p className="description">total backers</p>
          </article>
          <hr/>
          <article>
            <p className="nums">56</p>
            <p className="description">days left</p>
          </article>
          <div className="progress-bar">
            <div className="progress" ref={bar}></div>
          </div>
        </section>
    
        <section className="third">
          <h2>About this project</h2>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
    
          <aside className="product">
            <h3 className="black">Bamboo Stand</h3>
            <h3 className="green">Pledge $25 or more</h3>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
              you’ll be added to a special Backer member list.
            </p>
            <div className="how-many">
              <span className="big-letter">{bambooStand}</span>
              <span className="small-letter">left</span>
            </div>
            <button onClick={() => setShowModal(true)} className={bambooStand === 0 ? "grey": ""}>{bambooStand ? "Select Reward" : "Out of stock"}</button>
            <div className={bambooStand ? "none" : "unavailable-item"}></div>
          </aside>
    
          <aside className="product">
            <h3 className="black">Black Edition Stand</h3>
            <h3 className="green">Pledge $75 or more</h3>
            <p>
              You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
              member list. Shipping is included.
            </p>
            <div className="how-many">
              <span className="big-letter">{blackEditionStand}</span>
              <span className="small-letter">left</span>
            </div>
            <button onClick={() => setShowModal(true)} className={blackEditionStand === 0 ? "grey": ""}>{blackEditionStand ? "Select Reward" : "Out of stock"}</button>
            <div className={blackEditionStand ? "none" : "unavailable-item"}></div>
          </aside>
    
          <aside className="product">
            <h3 className="black">Mahogany Special Edition</h3>
            <h3 className="green">Pledge $200 or more</h3>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
              to our Backer member list. Shipping is included.
            </p>
            <div className="how-many">
              <span className="big-letter">{mahagonySpecialEdition}</span>
              <span className="small-letter">left</span>
            </div>
            <button onClick={() => setShowModal(true)} className={mahagonySpecialEdition === 0 ? "grey": ""}>{mahagonySpecialEdition ? "Select Reward" : "Out of stock"}</button>
            <div className={mahagonySpecialEdition ? "none" : "unavailable-item"}></div>
          </aside>
        </section>
      </main>
    )

} 

















