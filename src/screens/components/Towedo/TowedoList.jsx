import React from 'react';
import TowedoItem from './TowedoItem.jsx'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function TowedoList(props) {
    return (
            <Box sx={{ flexGrow: 1}}>
                <Grid container spacing={2}>
                    {props.towedos.map(towedo => {
                        return (
                            <Grid item xs={1}>
                                <Item>
                                    <TowedoItem towedo={towedo} key={towedo.id} /> 
                                </Item>
                            </Grid> 
                            )
                    })}
                </Grid>
            </Box>
    )
}


export default TowedoList;