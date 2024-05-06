import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import {InputAdornment,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Frontend',
  'Backend',
  'Flutter',
  'IOS',
  'React Native',
  'Android',
  'Data Engineer'
];


const locations = [
    'Delhi NCR',
    'Bangalore',
    'Mumbai',
    'Pune'
  ];

  const Mode = [
    'Remote',
    'Hybrid',
    'In-office'
  ];
  const TechStack = [
    'React',
    'Golang',
    'PHP',
    'Nodejs',
    'Ruby/Rails'
  ];
  const Exp = ['None','1','2','3','4','5']
  const Pay = ['None','10L','20L','30L','40L','50L']
function getStyles(name, roles, theme) {
  return {
    fontWeight:
      roles.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [roles, setroles] = React.useState([]);
  const [techstack, setTechStacks] = React.useState([]);
  const [mode, setMode] = React.useState([]);
  const [location,setLocation] = React.useState([]);
  const [minBasePay,setMinBasePay] = React.useState()
  const [minExp,setMinExp] = React.useState()

  const handleRoleChange = (event) => {
    const {
      target: { value },
    } = event;
    setroles(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleLocationChange = (event) => {
    const {
      target: { value },
    } = event;
    setLocation(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleTechStackChange = (event) => {
    const {
      target: { value },
    } = event;
    setTechStacks(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleModeChange = (event) => {
    const {
      target: { value },
    } = event;
    setMode(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleExpChange = (event) => {
    setMinExp(event.target.value);
  };
  const handlePayChange = (event) => {
    setMinBasePay(event.target.value);
  };


  return (
    <Box sx={{display:'flex'}}>
        <FormControl sx={{  width: "14.3%"  , mr: 1,mt:1}}>
        <InputLabel id="demo-multiple-chip-label">Roles</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          autoWidth
          value={roles}
          onChange={handleRoleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Roles" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, roles, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl sx={{  width: "14.3%"  , m:1}}>

        <InputLabel id="demo-multiple-chip-label">Location</InputLabel>



        <Select
            autoWidth
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={location}
          onChange={handleLocationChange}
          input={<OutlinedInput id="select-multiple-chip" label="Location" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {locations.map((l) => (
            <MenuItem
              key={l}
              value={l}
              style={getStyles(l, location, theme)}
            >
              {l}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl sx={{  width: "14.3%"  , m:1}}>

<InputLabel id="demo-multiple-chip-label">TechStack</InputLabel>



<Select
autoWidth
  labelId="demo-multiple-chip-label"
  id="demo-multiple-chip"
  multiple
  value={techstack}
  onChange={handleTechStackChange}
  input={<OutlinedInput id="select-multiple-chip" label="TechStack" />}
  renderValue={(selected) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
      {selected.map((value) => (
        <Chip key={value} label={value} />
      ))}
    </Box>
  )}
  MenuProps={MenuProps}
>
  {TechStack.map((l) => (
    <MenuItem
      key={l}
      value={l}
      style={getStyles(l, techstack, theme)}
    >
      {l}
    </MenuItem>
  ))}
</Select>
        </FormControl>
        <FormControl sx={{  width: "14.3%"  , m:1}}>

<InputLabel id="demo-multiple-chip-label">Mode</InputLabel>



<Select
autoWidth
  labelId="demo-multiple-chip-label"
  id="demo-multiple-chip"
  multiple
  value={mode}
  onChange={handleModeChange}
  input={<OutlinedInput id="select-multiple-chip" label="Mode" />}
  renderValue={(selected) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
      {selected.map((value) => (
        <Chip key={value} label={value} />
      ))}
    </Box>
  )}
  MenuProps={MenuProps}
>
  {Mode.map((l) => (
    <MenuItem
      key={l}
      value={l}
      style={getStyles(l, mode, theme)}
    >
      {l}
    </MenuItem>
  ))}
</Select>
        </FormControl>
        <FormControl sx={{  width: "14.3%" , m:1 }}>
<InputLabel id="demo-simple-select-label">Min Experience</InputLabel>
        <Select
        autoWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={minExp}
          label="Min Experience"
          placeholder='MinExperience'
          onChange={handleExpChange}
        >
          {Exp.map((e) =>(
            <MenuItem
            key={e}
            value={e}
            >{e}</MenuItem>
          ))}
  
</Select>
        </FormControl>
        <FormControl sx={{  width: "14.3%"  , m:1}}>
<InputLabel id="demo-simple-select-label">Min Base Pay</InputLabel>
        <Select
        autoWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={minBasePay}
          label="Min Base Pay"
          placeholder='Min Base Pay'
          onChange={handlePayChange}
        >
          {Pay.map((e) =>(
            <MenuItem
            key={e}
            value={e}
            >{e}</MenuItem>
          ))}
  
</Select>
        </FormControl>
        <FormControl sx={{  width: "14.3%"  , m:1}}>
        <InputLabel htmlFor="outlined-adornment-password">Search Company</InputLabel>
          <OutlinedInput
          autoWidth
            id="outlined-adornment-password"
            type='text'
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  
                
                  edge="end"
                >
                    <SearchIcon/>
                </IconButton>
              </InputAdornment>
            }
            label="Search Company"
          />
        </FormControl>
    </Box>
  );
}
