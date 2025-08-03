import { useState } from "react"
import './Portfolio.css'
import CreativeProjects from "./PortfolioSections/CreativeProjects"
import SoftwareProjects from "./PortfolioSections/SoftwareProjects"

function Porfolio(){
    const [category, setCategory] = useState('creative')

    return (
        <main id='portfolio'>
            <div className="portfolio-header">
                <h1 className="title">PROJECT COLLECTION</h1>
                <div id='tab-switch'>
                    <button onClick={() => setCategory('creative')} className={category === 'creative' ? 'tab active' : 'tab'}>Creative <i class="fa-solid fa-palette"></i></button>
                    <button onClick={() => setCategory('software')} className={category === 'software' ? 'tab active' : 'tab'}>Software & Web <i class="fa-solid fa-code"></i></button>
                </div>
            </div>

            {category === 'creative' ? <CreativeProjects/> : <SoftwareProjects/>}
        </main>
    )
}

export default Porfolio