import React from 'react';
import Tile from './Tile';
import Overview from './Overview';
import Footer from './Footer';
import Banner from './Banner';

const imagePath1 = './images/vegan.jpg';
const imagePath2 = './images/sugar-conscious.jpg';
const imagePath3 = './images/gluten-free.jpg';
const imagePath4 = './images/paleo_diet.jpg';
const imagePath5 = './images/keto.jpg';
const imagePath6 = './images/low-carb.jpg';

const Home = ()=> {
    return (
        <div id="wrapper">
            <header id="header" className="reveal alt">
                <a href="/" className="logo"><strong>Recipes</strong> <span>for various dietary requirements</span></a>
            </header>

            <div id="main">
                <Banner id="banner" className="major" />
                <section id="one" className="tiles">
                    <Tile title="Vegan" url= {imagePath1} description= "No meat, poultry, fish, dairy, eggs or honey"/>
                    <Tile title="Sugar Conscious" url= {imagePath2}  description= "Less than 4g of sugar per serving"/>
                    <Tile title="Gluten Free" url= {imagePath3} description= "free from wheat, barley, rye, and oats."/>
                    <Tile title="Paleo" url= {imagePath4} description= "foods that in the past could only be obtained by hunting and gathering."/>
                    <Tile title="Keto" url= {imagePath5} description= "Maximum 7 grams of net carbs per serving"/>
                    <Tile title="Low Carb" url= {imagePath6} description= "Less than 20% of total calories from carbs"/>
                </section>

                <section id="two">
                    <Overview/>
                </section>
            </div>
            <Footer/>
		</div>
    );
}

export default Home;