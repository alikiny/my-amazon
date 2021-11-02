import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchField from './Search';

function Header() {
    return (
        <div className="home-header">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <img
                            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                            width='100vh'
                            alt="amazon logo"
                        />
                        <Box sx={{ flexGrow: 1 }}><SearchField/></Box>
                        
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Header;