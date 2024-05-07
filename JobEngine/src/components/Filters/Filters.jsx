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
import { useSelector, useDispatch } from 'react-redux'
import { locationChange,techStackChange,rolesChange,modeChange,minExpChange,minPayChange,search } from '../../store/DropdownSlice'
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
  const Exp = ['All','1','2','3','4','5','6','7','8','10']
  const Pay = ['All','10K','20K','30K','40K','50K','60K','70K','80','90K','100K']
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
  const dispatch = useDispatch()
  const jobRole = useSelector((state)=>state.filter.jobRole)
  const techStack = useSelector((state)=>state.filter.techStack)
  const location = useSelector((state)=>state.filter.location)
  const mode = useSelector((state)=>state.filter.mode)
  const minBasePay = useSelector((state)=>state.filter.minBasePay)
  const minExperience = useSelector((state)=>state.filter.minExperience)


  const handleRoleChange = (event) => {
    dispatch(rolesChange(event.target.value))
  };
  const handleLocationChange =  (event) => {  
    dispatch(locationChange(event.target.value)   
    );
  };
  const handleTechStackChange = (event) => {
    dispatch(techStackChange(event.target.value))
  };
  const handleModeChange = (event) => {
    dispatch(modeChange(event.target.value))
  };
  const handleExpChange = (event) => {
    dispatch(minExpChange(event.target.value));
  };
  const handlePayChange = (event) => {
    dispatch(minPayChange(event.target.value));
  };
  const handleSearchChange = (event) => {
    dispatch(search(event.target.value))
  }


  return (
    <Box sx={{display:'flex'}}>
        <FormControl sx={{  width: "14.3%"  , mr: 1,mt:1}}>
        <InputLabel id="demo-multiple-chip-label">Roles</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          autoWidth
          value={jobRole}
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
              style={getStyles(name, jobRole, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl sx={{  width: "14.3%"  , m:1}}>

        <InputLabel>Location</InputLabel>



        <Select
          autoWidth
          multiple
          value={location}
          onChange={handleLocationChange}
          input={<OutlinedInput  label="Location" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap:'wrap', gap: 0.5 }}>
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
  value={techStack}
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
      style={getStyles(l, techStack, theme)}
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
          value={minExperience}
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
            onChange={handleSearchChange}
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
