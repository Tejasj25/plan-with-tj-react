import { useState } from "react";



function Card({id,name,image,info, price, removeTour, addTour}){
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    

    return(
        <div>
            <div className="card">
                <img src={image} className="image"></img>
                <div className="tour-info">
                    <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                    </div>
                </div>
                 
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
                
                <button className="btn-red" onClick={() => addTour(id)}>
                 Interested
                </button>
                <button className="btn-red" onClick={() => removeTour(id)}>
                 Not Interested
                </button>
            </div>
        </div>
    )
}

export default Card;