import React from 'react';
import TowedoItem from './TowedoItem.jsx'

function TowedoList(props) {
    return (
         <ul>
                {props.towedos.map(towedo => {
                   return <TowedoItem towedo={towedo} key={towedo.id} />
                })}
        </ul>
    )
}


export default TowedoList;