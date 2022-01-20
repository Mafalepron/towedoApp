import React, {useState} from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, TextField } from '@mui/material';

function AddTowedos({onCreate})  {
    // constructor({ onCreate }) {
    //     super({ onCreate });
    //     this.state = {
    //         fieldOne: '',
    //         fieldTwo: '',
    //         fieldThree: '',
    //         fieldFour: '',
    //     }
    // }
    const [fieldOne, setfieldOne] = useState('');
    const [fieldTwo, setfieldTwo] = useState('');
    const [fieldThree, setfieldThree] = useState('');
    const [fieldFour, setfieldFour] = useState('');



    function handleSubmit(event) {
        // const isValidName = this.state.fieldOne;
        // const isValidField = [this.state.fieldTwo, this.state.fieldThree, this.state.fieldFour];

        // for (let i = 0; i <= 2; i++) {
        //     if (isValidField[i].length > 120) {
        //         alert("2,3,4 field's can't be more than 120 letters")  
        //     }
        // };

        // if (isValidName.length < 3) {
        //     alert("Name field can't be less than 3 letters")
        // };
        if (event.value.trim()) {
            onCreate(event.value)
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
                    <span className="addButton">
                        <IconButton  size="small">
                            <AddCircleOutlineIcon fontSize="large" />
                        </IconButton>
                    </span>
            </form>
        </div>
    )
};





export {AddTowedos};