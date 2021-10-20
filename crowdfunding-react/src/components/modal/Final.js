
import correct from '../../assets/images/icon-check.svg';
import closeModal from '../../assets/images/icon-close-modal.svg';
import {useGlobalContext} from '../../context/GlobalContext';

export default function Final() {

    const {showFinal, setShowFinal} = useGlobalContext();

    return(
        <div className={showFinal ? "final-background" : "final-background js-hidden"}>
        <div className="modal final">
            <img src={closeModal} alt="closeModal" className="closeModal" onClick={() => setShowFinal(false)}/>
            <img src={correct} alt="check" className="check"/>
            <h2>Thanks for your support!</h2>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
            an email once our campaign is completed.</p>
            <button className="back" onClick={() => setShowFinal(false)}>Got it!</button>
        </div>
        </div>
    )

}

















