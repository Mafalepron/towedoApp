import React, {useContext} from "react";
import Context from "../../../context";

export default function TowedoItem(props) {
    const { removeTowedo } = useContext(Context);
    return (
            <div>
                {props.towedo.fieldOne}
                <br />
                {props.towedo.fieldTwo}
                <br />
                {props.towedo.fieldThree}
                <br />
                {props.towedo.fieldFour}
                <br />
                <button onClick={() => removeTowedo(props.towedo.id)}>del</button>
            </div>
    ) 
};