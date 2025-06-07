import { useState } from "react"
import './Portfolio.css'
import CreativeProjects from "./PortfolioSections/CreativeProjects"
import SoftwareProjects from "./PortfolioSections/SoftwareProjects"

function Porfolio(){
    const [category, setCategory] = useState('creative')

    return (
        <main id='portfolio'>
            <h1 className="title">Portfolio</h1>
            <div id='tab-switch'>
                <button onClick={() => setCategory('creative')} className={category === 'creative' ? 'tab active' : 'tab'}>Creative Projects</button>
                <button onClick={() => setCategory('software')} className={category === 'software' ? 'tab active' : 'tab'}>Software & Web</button>
            </div>

            {category === 'creative' ? <CreativeProjects/> : <SoftwareProjects/>}
        </main>
    )
}

export default Porfolio