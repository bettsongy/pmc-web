import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FilterContext } from '../CoursePage/CourseReviews';

export default function ReviewDropdownProfessor({ options, value, onChange }) {
  return (
    <Box width='192px'>
      <FormControl fullWidth>
        <InputLabel>Professors</InputLabel>
        <Select
          value={value}
          label='PrfessorsOptions'
          onChange={(event) => {
            onChange(event.target.value);
          }}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option.professorName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}