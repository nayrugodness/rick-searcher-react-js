import React from "react";

export const Characters = ({characters = []}) =>{
    console.log(characters)
    return(
        <>
                {
                    characters.map((item, index) =>(
                        <div key={index} className="card">
                            <div className="bodyCard">
                                <img className="imgCard" src={item.image} alt="" />
                                <h3 className="character-name">{item.name}</h3>
                                <div className="info-card">
                                    <p className="detail">Gender: <span>{item.gender}</span></p>
                                    <p className="detail">Status: <span>{item.status}</span></p>
                                    <p className="detail">Species: <span>{item.species}</span></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
        </>
    )
}