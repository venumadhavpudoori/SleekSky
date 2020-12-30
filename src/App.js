import React ,{ useState, useEffect  }from 'react';
import './App.css';
import axios from "axios";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function App() {
  const[post,setPost] = useState([]);
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/lang/es')
    .then(res =>{
        console.log(res.data[0])
        setPost(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
},[])
  return (
    <div className="App">
      <header className="App-header">
      <Container maxWidth="sm" id='home'> 
      <Typography variant="h1" component="h2"  style={{color: '#000',fontWeight:'bold',fontSize:'52px',float:'left',margin:'20px 20px'}} gutterBottom>
              Sleek Sky
       </Typography> 
      <Autocomplete
      id="combo-box-demo"
      options={post}
      getOptionLabel={(option) => option.name}
      style={{  height: '70vh'  }}
      renderInput={(params) => <TextField {...params} label="Select Language" variant="outlined" />}
      />
      </Container> 
      </header>
    </div>
  );
}

export default App;
