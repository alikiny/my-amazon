import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function SearchField() {
    const [catergory, setCatergory] = React.useState('All');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCatergory(event.target.value);
    };

    const catergories = ['All', 'Cosmetic', 'Food']
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                    select
                    value={catergory}
                    onChange={handleChange}
                >
                    {catergories.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton><SearchIcon/></IconButton>
                        </InputAdornment>,
                    }}
                />
            </div>
        </Box>
    );
}

export default SearchField;