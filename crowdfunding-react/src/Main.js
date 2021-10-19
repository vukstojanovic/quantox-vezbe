
import logoMastercraft from './images/logo-mastercraft.svg';
import iconBookmark from './images/icon-bookmark.svg';
import { UseGlobalContext } from './context';
import { useEffect, useRef, useState } from 'react';

export default function Main() {

    const {showModal, setShowModal} = UseGlobalContext();
    const {totalMoney} = UseGlobalContext();
    const {totalBackers} = UseGlobalContext();
    const {bambooStand} = UseGlobalContext();
    const {blackEditionStand} = UseGlobalContext();
    const {mahagonySpecialEdition} = UseGlobalContext();

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
    
        <section class="first">
          <div class="upper-img">
            <img src={logoMastercraft} alt="logoMastercraft"/>
          </div>
          <h1>Mastercraft Bamboo Monitor Riser</h1>
          <p>A beautiful a handcrafted monitor stand to reduce neck and eye strain.</p>
          <div class="buttons">
            <button class="back" onClick={() => setShowModal(true)}>Back this project</button>
            <div class={isBookmarked ?"bookmark bookmark-active" : "bookmark"} onClick={() => setIsBookmarked(prev => !prev)}><img src={iconBookmark} alt="bookmark"/><span>Bookmark</span></div>
          </div>
        </section>
    
        <section class="second">
          <article>
            <p class="nums">${numberWithCommas(totalMoney)}</p>
            <p class="description">of $100,000 backed</p>
          </article>
          <hr/>
          <article>
            <p class="nums">{numberWithCommas(totalBackers)}</p>
            <p class="description">total backers</p>
          </article>
          <hr/>
          <article>
            <p class="nums">56</p>
            <p class="description">days left</p>
          </article>
          <div class="progress-bar">
            <div class="progress" ref={bar}></div>
          </div>
        </section>
    
        <section class="third">
          <h2>About this project</h2>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.
          </p>
    
          <aside className="product">
            <h3 class="black">Bamboo Stand</h3>
            <h3 class="green">Pledge $25 or more</h3>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
              you’ll be added to a special Backer member list.
            </p>
            <div class="how-many">
              <span class="big-letter">{bambooStand}</span>
              <span class="small-letter">left</span>
            </div>
            <button onClick={() => setShowModal(true)}>{bambooStand ? "Select Reward" : "Out of stock"}</button>
            <div className={bambooStand ? "none" : "unavailable-item"}></div>
          </aside>
    
          <aside className="product">
            <h3 class="black">Black Edition Stand</h3>
            <h3 class="green">Pledge $75 or more</h3>
            <p>
              You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
              member list. Shipping is included.
            </p>
            <div class="how-many">
              <span class="big-letter">{blackEditionStand}</span>
              <span class="small-letter">left</span>
            </div>
            <button onClick={() => setShowModal(true)}>{blackEditionStand ? "Select Reward" : "Out of stock"}</button>
            <div className={blackEditionStand ? "none" : "unavailable-item"}></div>
          </aside>
    
          <aside className="product">
            <h3 class="black">Mahogany Special Edition</h3>
            <h3 class="green">Pledge $200 or more</h3>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
              to our Backer member list. Shipping is included.
            </p>
            <div class="how-many">
              <span class="big-letter">{mahagonySpecialEdition}</span>
              <span class="small-letter">left</span>
            </div>
            <button onClick={() => setShowModal(true)}>{mahagonySpecialEdition ? "Select Reward" : "Out of stock"}</button>
            <div className={mahagonySpecialEdition ? "none" : "unavailable-item"}></div>
          </aside>
        </section>
      </main>
    )

} 

















