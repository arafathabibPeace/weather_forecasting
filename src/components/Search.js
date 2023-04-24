import React, { useEffect, useState } from "react";
import { Button, Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from '../pageStyle.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { loadCityDetails, loadForecastDetails } from "../redux/action";
const Search = () => {
    let dispatch = useDispatch()
    const { cityDetails } = useSelector((state) => state.cityDetails)

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const submitHandler = () => {
        dispatch(loadCityDetails(searchTerm))
    }

console.log(cityDetails)

return <div>
    <Container maxWidth="md" sx={{ mt: 20 }}>
        <TextField
            id="search"
            type="search"
            label="Search"
            value={searchTerm}
            onChange={handleChange}
            sx={{ width: 600 }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
       <div className={styles.searhButton}><Button variant="contained" onClick={submitHandler}>Search</Button></div> 
    </Container>

</div>
}

export default Search