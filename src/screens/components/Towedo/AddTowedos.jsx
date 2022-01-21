import React, {useState} from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, TextField } from '@mui/material';


function AddTowedos({onCreate})  {
 

    const [fieldOne, setfieldOne] = useState('');
    const [fieldTwo, setfieldTwo] = useState('');
    const [fieldThree, setfieldThree] = useState('');
    const [fieldFour, setfieldFour] = useState('');



    function handleSubmit(event) {
        event.preventDefault()
        const isValidName = fieldOne;
        const isValidField = [fieldTwo, fieldThree, fieldFour];

        for (let i = 0; i <= 2; i++) {
            if (isValidField[i].length > 120) {
            return alert("2,3,4 field's can't be more than 120 letters")  
            }
        };

        if (isValidName.length < 3 || isValidName.length > 16) {
            return alert("Name field can't be less than 3 letters and cant't be more than 16 letters")
        };

        if (fieldOne.trim()) {
            onCreate(fieldOne, fieldTwo, fieldThree, fieldFour)
            setfieldOne(''); setfieldTwo('');setfieldThree(''); setfieldFour('');
        }
    };


    return (
        <div>
            <form className='addTowedos' onSubmit={handleSubmit}>
                <TextField 
                    name="fieldOne" 
                    label="fieldOne" 
                    variant="standard"
                    value={fieldOne}
                    onChange={event => setfieldOne(event.target.value)}
                />
                <TextField 
                    name="fieldTwo"  
                    label="fieldTwo" 
                    variant="standard"
                    value={fieldTwo}
                    onChange={event => setfieldTwo(event.target.value)}
                />
                <TextField 
                    name="fieldThree"  
                    label="fieldThree" 
                    variant="standard"
                    value={fieldThree}
                    onChange={event => setfieldThree(event.target.value)}
                />
                <TextField 
                    name="fieldFour"  
                    label="fieldFour"
                    variant="standard"
                    value={fieldFour}
                    onChange={event => setfieldFour(event.target.value)}
                />
                <br />
                    <span className="addButton" >
                        <IconButton  size="small" type="submit">
                            <AddCircleOutlineIcon fontSize="large" />
                        </IconButton>
                    </span>
            </form>
        </div>
    )
};





export {AddTowedos};