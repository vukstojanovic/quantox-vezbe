import closeModal from './images/icon-close-modal.svg';
import {UseGlobalContext} from './context';
import { useState } from 'react';

export default function Modal() {

    const {showModal, setShowModal} = UseGlobalContext();
    const {setShowFinal} = UseGlobalContext();
    const {totalMoney, setTotalMoney} = UseGlobalContext();
    const {bambooStand, setBambooStand} = UseGlobalContext();
    const {blackEditionStand, setBlackEditionStand} = UseGlobalContext();
    const {mahagonySpecialEdition, setMahagonySpecialEdition} = UseGlobalContext();
    const {setTotalBackers} = UseGlobalContext();
    const [currentPledge, setCurrentPledge] = useState(0);
    const [currentReward, setCurrentReward] = useState("");

    console.log(totalMoney);

    function hideLowers() {
      document.querySelectorAll(".lower").forEach(item => {
        item.classList.add("js-hidden");
      })
    }

    function displayLower(e) {
      hideLowers();
      console.log(e.target.checked);
      console.log(e.target.parentElement.parentElement.parentElement.querySelector(".lower"));
      setCurrentReward(e.target.id);
      if (e.target.checked) {
        const lower = e.target.parentElement.parentElement.parentElement.querySelector(".lower");
        lower.classList.remove("js-hidden");
      }
    }

    function pledgeMoney() {
      setTotalMoney(prevValue => prevValue + Number(currentPledge));
      setTotalBackers(prevValue => prevValue + 1);
      setCurrentPledge(0);
      setShowModal(false);
      setShowFinal(true);
      if (currentReward === "bambooStand") {
        setBambooStand(prev => prev - 1);
      } else if (currentReward === "blackEditionStand") {
        setBlackEditionStand(prev => prev - 1);
      } else if (currentReward === "mahoganyStand") {
        setMahagonySpecialEdition(prev => prev - 1);
      }
    }

    // function updateBambooStand

    return(
    <div className={showModal ? "modal-background" : "modal-background js-hidden"}>
        <div className="modal">
          <img src={closeModal} alt="closeModal" className="closeModal" onClick={() => setShowModal(false)}/>
          <h2>Back this project</h2>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
          </p>
  
          <aside className="product">
            <div className="radio-container no-reward">
                <label className="radio">
                  <input type="radio" name="radioName" id="no-reward" onClick={displayLower}/>
                  <div className="radio-colored"></div>
                </label>
                <div className="heading-container">
                    <h3 className="black">Pledge with no reward</h3>
                </div>
            </div>
            <p>
              Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
            </p>
            <div className="lower js-hidden">
                <p className="lower-text">Enter your pledge</p>
                <div className="lower-inputs">
                    <input type="number" placeholder="$" value={currentPledge} onChange={(e) => setCurrentPledge(e.target.value)}/>
                    <button onClick={pledgeMoney}>Continue</button>
                </div>
            </div>
          </aside>
      
          <aside className="product">
            <div className="radio-container">
                <label className="radio">
                  <input type="radio" name="radioName" id="bambooStand" onClick={displayLower}/>
                  <div className="radio-colored"></div>
                </label>
                <div className="heading-container">
                    <h3 className="black">Bamboo Stand</h3>
                    <h3 className="green">Pledge $25 or more</h3>
                </div>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
              you’ll be added to a special Backer member list.
            </p>
            <div className="how-many">
              <span className="big-letter">{bambooStand}</span>
              <span className="small-letter">left</span>
            </div>
            <div className="lower js-hidden">
                <p className="lower-text">Enter your pledge</p>
                <div className="lower-inputs">
                    <input type="number" placeholder="$" min={25} value={currentPledge} onChange={(e) => setCurrentPledge(e.target.value)}/>
                    <button onClick={pledgeMoney}>Continue</button>
                </div>
            </div>
            <div className={bambooStand ? "none" : "unavailable-item"}></div>
          </aside>
      
          <aside className="product">
            <div className="radio-container">
                <label className="radio">
                  <input type="radio" name="radioName" id="blackEditionStand" onClick={displayLower}/>
                  <div className="radio-colored"></div>
                </label>
                <div className="heading-container">
                    <h3 className="black">Black Edition Stand</h3>
                    <h3 className="green">Pledge $75 or more</h3>
                </div>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
              member list. Shipping is included.
            </p>
            <div className="how-many">
              <span className="big-letter">{blackEditionStand}</span>
              <span className="small-letter">left</span>
            </div>
            <div className="lower js-hidden">
                <p className="lower-text">Enter your pledge</p>
                <div className="lower-inputs">
                    <input type="number" placeholder="$" min={75} value={currentPledge} onChange={(e) => setCurrentPledge(e.target.value)}/>
                    <button onClick={pledgeMoney}>Continue</button>
                </div>
            </div>
            <div className={blackEditionStand ? "none" : "unavailable-item"}></div>
          </aside>
      
          <aside className="product">
            <div className="radio-container">
                <label className="radio">
                  <input type="radio" name="radioName" id="mahoganyStand" onClick={displayLower}/>
                  <div className="radio-colored"></div>
                </label>
                <div className="heading-container">
                    <h3 className="black">Mahogany Special Edition</h3>
                    <h3 className="green">Pledge $200 or more</h3>
                </div>
            </div>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
              to our Backer member list. Shipping is included.
            </p>
            <div className="how-many">
              <span className="big-letter">{mahagonySpecialEdition}</span>
              <span className="small-letter">left</span>
            </div>
            <div className="lower js-hidden">
                <p className="lower-text">Enter your pledge</p>
                <div className="lower-inputs">
                    <input type="number" placeholder="$" min={200} value={currentPledge} onChange={(e) => setCurrentPledge(e.target.value)}/>
                    <button onClick={pledgeMoney}>Continue</button>
                </div>
            </div>
            <div className={mahagonySpecialEdition ? "none" : "unavailable-item"}></div>
          </aside>
        </div>
    </div>
    )

}









