import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } 
from "react-redux";
import {
  locationChange,
  techStackChange,
  rolesChange,
  modeChange,
  minExpChange,
  minPayChange,
  search,
} from "../../store/DropdownSlice";

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

const JobRoles = [
  "Frontend",
  "Backend",
  "IOS",
  "React Native",
  "Android",
  "Data Engineer",
  "Tech Lead",
];
const locations = ["Delhi NCR", "Bangalore", "Mumbai", "Pune", "Chennai"];
const Mode = ["Remote", "Hybrid", "In-office"];
const TechStack = ["React", "Golang", "PHP", "Nodejs", "Ruby/Rails"];
const Exp = ["All", "1", "2", "3", "4", "5", "6", "7", "8", "10"];
const Pay = [
  "All",
  "10K",
  "20K",
  "30K",
  "40K",
  "50K",
  "60K",
  "70K",
  "80K",
  "90K",
  "100K",
];
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
  const dispatch = useDispatch();
  // accessing variable in the store
  const jobRole = useSelector((state) => state.filter.jobRole);
  const techStack = useSelector((state) => state.filter.techStack);
  const location = useSelector((state) => state.filter.location);
  const mode = useSelector((state) => state.filter.mode);
  const minBasePay = useSelector((state) => state.filter.minBasePay);
  const minExperience = useSelector((state) => state.filter.minExperience);

  // function to handle input in the select/dropdown/search component
  const handleRoleChange = (event) => {
    dispatch(rolesChange(event.target.value));
  };
  const handleLocationChange = (event) => {
    dispatch(locationChange(event.target.value));
  };
  const handleTechStackChange = (event) => {
    dispatch(techStackChange(event.target.value));
  };
  const handleModeChange = (event) => {
    dispatch(modeChange(event.target.value));
  };
  const handleExpChange = (event) => {
    dispatch(minExpChange(event.target.value));
  };
  const handlePayChange = (event) => {
    dispatch(minPayChange(event.target.value));
  };
  const handleSearchChange = (event) => {
    dispatch(search(event.target.value));
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Filter by Job Roles */}
      <FormControl 
      sx={{ 
        width: "14.3%", 
        mr: 1, 
        mt: 1 }}>
        <InputLabel>Roles</InputLabel>
        <Select
          multiple
          autoWidth
          value={jobRole}
          onChange={handleRoleChange}
          input={<OutlinedInput label="Roles" />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {JobRoles.map((name) => (
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
          {/* Filter by Location  */}
      <FormControl sx={{ width: "14.3%", m: 1 }}>
        <InputLabel>Location</InputLabel>

        <Select
          autoWidth
          multiple
          value={location}
          onChange={handleLocationChange}
          input={<OutlinedInput label="Location" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {locations.map((l) => (
            <MenuItem key={l} value={l} style={getStyles(l, location, theme)}>
              {l}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Filter by TechStack  */}
      <FormControl sx={{ width: "14.3%", m: 1 }}>
        <InputLabel>TechStack</InputLabel>

        <Select
          autoWidth
          multiple
          value={techStack}
          onChange={handleTechStackChange}
          input={<OutlinedInput label="TechStack" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {TechStack.map((l) => (
            <MenuItem key={l} value={l} style={getStyles(l, techStack, theme)}>
              {l}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Filter by Mode  */}
      <FormControl sx={{ width: "14.3%", m: 1 }}>
        <InputLabel>Mode</InputLabel>

        <Select
          autoWidth
          multiple
          value={mode}
          onChange={handleModeChange}
          input={<OutlinedInput label="Mode" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {Mode.map((l) => (
            <MenuItem key={l} value={l} style={getStyles(l, mode, theme)}>
              {l}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Filter by Min Experience  */}
      <FormControl sx={{ width: "14.3%", m: 1 }}>
        <InputLabel >Min Experience</InputLabel>
        <Select
          autoWidth
          id="demo-simple-select"
          value={minExperience}
          label="Min Experience"
          placeholder="MinExperience"
          onChange={handleExpChange}
        >
          {Exp.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Filter by Min Base Pay  */}
      <FormControl sx={{ width: "14.3%", m: 1 }}>
        <InputLabel >Min Base Pay</InputLabel>
        <Select
          autoWidth
          id="demo-simple-select"
          value={minBasePay}
          label="Min Base Pay"
          placeholder="Min Base Pay"
          onChange={handlePayChange}
        >
          {Pay.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Search by Company Search  */}
      <FormControl sx={{ width: "14.3%", m: 1 }}>
        <InputLabel>
          Search Company
        </InputLabel>
        <OutlinedInput
          autoWidth
          type="text"
          onChange={handleSearchChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Search Company"
        />
      </FormControl>
    </Box>
  );
}
