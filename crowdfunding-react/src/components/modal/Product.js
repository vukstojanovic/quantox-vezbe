
import { useState } from 'react';
import {useGlobalContext} from '../../context/GlobalContext';

export default function Product({name, minPledge, description, articlesLeft, updateArticles, currentReward, setCurrentReward}) {

    const {setTotalMoney, setTotalBackers, setShowModal, setShowFinal} = useGlobalContext();
    const [currentPledge, setCurrentPledge] = useState(0);

    console.log(name, minPledge, description, articlesLeft, updateArticles);

    function makeAPledge() {
        if (Number(currentPledge) < minPledge || Number(currentPledge) === 0) {
            alert("Below minimum :(");
        } else {
            setTotalMoney(prevValue => prevValue + Number(currentPledge));
            setTotalBackers(prevValue => prevValue + 1);
            setCurrentPledge(0);
            setShowModal(false);
            setShowFinal(true);
            if (updateArticles) {
                updateArticles(prev => prev - 1);
            }
        }
    }

    return (
        <aside className="product">
            <div className="radio-container">
                <label className="radio">
                    <input type="radio" name="radioName" value={name} onClick={() => setCurrentReward(name)}/>
                    <div className="radio-colored"></div>
                </label>
                <div className="heading-container">
                    <h3 className="black">{name}</h3>
                    { minPledge && <h3 className="green">Pledge ${minPledge} or more</h3>}
                </div>
            </div>
            <p>
                {description}
            </p>
            { updateArticles && <div className="how-many"><span className="big-letter">{articlesLeft}</span><span className="small-letter">left</span></div>}
            <div className={currentReward === name ? "lower" : "lower js-hidden"}>
                <p className="lower-text">Enter your pledge</p>
                <div className="lower-inputs">
                    <input type="number" placeholder="$" min={minPledge} value={currentPledge} onChange={(e) => setCurrentPledge(e.target.value)}/>
                    <button onClick={() => makeAPledge()}>Continue</button>
                </div>
            </div>
            <div className={articlesLeft ? "none" : "unavailable-item"}></div>
        </aside>
    )

}













