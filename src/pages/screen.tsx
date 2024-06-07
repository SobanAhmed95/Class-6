import { Box, Button } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import axios from "axios";
import { useState } from "react";
import BAGrid from "../components/BAGrid";
import PostAddIcon from '@mui/icons-material/PostAdd';

export default function APIHandlingScreen() {
    const [usersList, setUsersList] = useState<any>([]);

    const cli = () =>{ 
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((respons)=>{
        console.log(respons,'Success');
        setUsersList(respons.data);
    })
    .catch((err)=>{
        console.log(err, "Error");
    });
    }
    return <>
    <Box>
      <h1>Api Handling Screen</h1>
        <Button onClick={cli} sx={{margin:1, }} endIcon={<PostAddIcon/>} variant="contained">Post Data</Button>
    </Box>
    <BAGrid
    gridCols={[
    
        {
            key: 'name',
            label: 'User Name',
          },
          {
            key: 'email',
            label: 'User Email',
          },
          {
            key: 'phone',
            label: 'Phone',
          },
          {
            key: 'website',
            label: 'Web URL',
          }
    
    ]
    }datasource={usersList}/>
    </>
}