import Animal from "../animal/Animal"
import {animals} from "../data/data"

const Animals = ()=>{
    return(
<>
{animals.map(eL=>(<Animal key={eL.id} vardas={eL.animal} url={eL.img}/>))}


</>
    )
}

export default Animals