import React from 'react'
import Paper from '@mui/material/Paper';
function UserCard({image,name,description}) {

    const style = {
        img:{
            height:"100px",
            width:"100px"

        }
    }
    return (
        <Paper sx={{padding:"15px",margin:"10px"}}>
            <figure>
                <img style={style.img} src={image} alt={name} />
            </figure>
            <div>
                <p>Name :{name}</p>
                <p>Description :{description}</p>
            </div>
        </Paper>
    )
}

export default UserCard
