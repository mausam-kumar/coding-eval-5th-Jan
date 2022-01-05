import React from 'react'
import Button from '@mui/material/Button';
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate,Navigate} from 'react-router-dom'
import {authUserLogout,getUserData} from '../redux/action.js'
import TextField from '@mui/material/TextField';
import UserCard from './UserCard.jsx';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {userLogin} = useSelector(state => state.reducer.auth)
    

    const [state,setState] = React.useState("")

    const [pageNo,setPageNo] = React.useState(1)
    const [perPage,setPerPage] = React.useState(5)

    const [show,setShow] = React.useState(false)

    const {data} = useSelector(state => state.reducer.userData)

    const handleChange = (e) => {
        setState(e.target.value)
        
    } 

    const handleLogout = () => {
        dispatch(authUserLogout())
        navigate("/login")
    }

    const handleSearch = () => {
        dispatch(getUserData(state,pageNo))
        setShow(true)
    }

    const handleSelectOption = (e) => {
        dispatch(getUserData(state,pageNo,e.target.value))
        setPerPage(e.target.value)
        console.log("runnign")
    }

    const handlePaginationPrev = () => {
        if (pageNo===1) {
            return
        }else{
            dispatch(getUserData(state,pageNo-1,perPage))
            setPageNo(prev => prev-1)
        }
    }
    const handlePaginationNext = () => {
        if (data.length<perPage) {
            return
        }else{
            dispatch(getUserData(state,pageNo+1,perPage))
            setPageNo(prev => prev+1)
        }
    }

    return (
        userLogin===true?<div>
            <Button variant="contained" onClick={handleLogout}>Logout</Button>
            <br />
            <br />
            <TextField label="Enter UserName" color="secondary" value = {state} onChange={(e) => handleChange(e)}/>
            <Button sx={{margin:"10px"}} variant="contained" onClick={handleSearch}>Search</Button>
            <br />
            <br />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    { data.map((ele) => {
                        return(
                            <Grid item  lg={3} md={4} sm={6} xs={12} key={ele.id}>
                                <UserCard key={ele.id} image={ele.owner.avatar_url} 
                                description={ele.description} name={ele.full_name}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
           { show && <div>
               <label>Select Per_page :</label>
            <select onClick={(e) =>handleSelectOption(e)}>
                <option value="volvo">Per_Page</option>
                <option  value="10">10</option>
                <option  value="15">15</option>
                <option  value="20">20</option>
            </select>
            </div>}

            { show && 
                <div style={{width:"400px",display:"flex",justifyContent:"spaceBetween"}}>
                    <Button variant="contained" style={{margin:"10px"}} onClick={handlePaginationPrev}>Prev</Button>
                    <Button variant="contained" style={{margin:"10px"}}>Curr :{pageNo}</Button>
                    <Button variant="contained" style={{margin:"10px"}} onClick={handlePaginationNext}>Next</Button>
                </div>
            }

        </div>:<Navigate to="/login" />
    )
}

export default Home
