
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import "./QuestionsBeforeRegister.css";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function QuestionsBeforeRegister() {
  const [fundNames,setFundNames]=useState([])
  const [chanellNames,setChanellNames]=useState([])
  const [fundNameChosen,setFundNameChosen]=useState("");
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const history = useHistory();
  function toLoginPage() {
    history.push('Login')
  }
  
async function getAllFund(e){
  await fetch("/proxy/get-all-fund", {
    method: "POST",
    headers: {
      "Accept": "application/json; odata=verbose",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((r) => r.json())
    .then((data) => {
     setFundNames(data.fund_name)
     console.log(data.fund_name)
    });
}
useEffect(() => {
    getAllFund()
    
}, []);
  const handleChange = (event) => {
    const name = event.target.name;
    console.log(event.target.value)
    setFundNameChosen(event.target.value)
    fetch("/proxy/get-all-chanell", {
      method: "POST",
      headers: {
        "Accept": "application/json; odata=verbose",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({fundname:fundNameChosen}),
    })
      .then((r) => r.json())
      .then((data) => {
        setChanellNames(data.chaneles)
       console.log(data.chaneles)
      });
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (

    <div className="bod">
      <div className="icon"> </div>
      <div className="space" />
      <div className="direction">
        <div className="titleQ">2 שאלות קצרות ואנחנו בפנים</div>
        <div className="space" />
        <div className="name">בחר/י גוף פנסיוני</div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple"></InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange}
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {fundNames.map((index,fund)=>
              
              <option key={fund} value={index}>{index}</option>
              
            )}
          </Select>
        </FormControl>
        
        
        
        <div className="channelname">בחר/י אפיק חיסכון</div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple"></InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange}
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {chanellNames.map((index2,chanell)=>
              <option key={chanell} value={index2}>{index2}</option>
              
            )}
          </Select>
        </FormControl>
        
        <div />
        
      </div>
    </div>



  )
}