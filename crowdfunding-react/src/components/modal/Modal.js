import closeModal from '../../assets/images/icon-close-modal.svg';
import {useGlobalContext} from '../../context/GlobalContext';
import Product from './Product';
import { useState } from 'react';

export default function Modal() {

    const {showModal, setShowModal, setShowFinal, totalMoney, setTotalMoney, bambooStand, setBambooStand, blackEditionStand, setBlackEditionStand, mahagonySpecialEdition, setMahagonySpecialEdition, setTotalBackers} = useGlobalContext();
    const [currentPledge, setCurrentPledge] = useState(0);
    const [currentReward, setCurrentReward] = useState("");

    const productsList = [
      {name: "Pledge with no reward", minPledge: 0, description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.", articlesLeft: "N/A", updateArticles: null},
      {name: "Bamboo Stand", minPledge: 25, description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.", articlesLeft: bambooStand, updateArticles: setBambooStand},
      {name: "Black Edition Stand", minPledge: 75, description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", articlesLeft: blackEditionStand, updateArticles: setBlackEditionStand},
      {name: "Mahagony Special Edition", minPledge: 200, description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.", articlesLeft: mahagonySpecialEdition, updateArticles: setMahagonySpecialEdition}
    ]

    console.log(totalMoney);

    return(

      <div className={showModal ? "modal-background" : "modal-background js-hidden"}>
        <div className="modal">
          <img src={closeModal} alt="closeModal" className="closeModal" onClick={() => setShowModal(false)}/>
          <h2>Back this project</h2>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
          </p>
  
          {productsList.map((product, index) => {
            return (
              <Product key={index} {...product} currentReward={currentReward} setCurrentReward={setCurrentReward}/>
            )
          })}

        </div>
      </div>
    )

}
