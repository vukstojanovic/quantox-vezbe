
import { useTranslation } from 'react-i18next';

function Home() {

    const {t} = useTranslation();

    return (
        <div className="home">
            <h1>
                {t("home.welcome")}
                {/* Welcome to Fortnite E-commerce store. <br />
                Checkout list of our products and equip your hero with newest epic gear. */}
            </h1>
        </div>
    )

}

export default Home;
