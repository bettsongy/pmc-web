import React from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import CourseStatus from './CourseStatus';
//Project Imports
import SubCard from '../Skeleton/SubCard';
import CourseChip from '../../components/CourseDetails/CourseChip';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

//TODO 1: loop through the course dynamically to check the enrollment requirement
//TODO 2: Assign different colors to the tag e.g red to show the user hasn't completed the class, blue vice-versa
const gridSpacing = 3;

export default function CourseEnrollmentSubCard({ course }) {
  return (
    <SubCard title='Enrollment Information'>
      <Grid container direction='column' spacing={gridSpacing}>
        <Grid item>
          <Typography gutterBottom variant='h6' component='div'>
            Credit hour:
            <CourseChip value={course.credit_hour} />
          </Typography>
          <Divider variant='middle' />

          <Typography gutterBottom variant='h6' component='div'>
            Associated courses:
            <CourseChip value={course.associated_course} />
          </Typography>

          <Divider variant='middle' />

          <Typography gutterBottom variant='h6' component='div'>
            Prerequesites:
            <CourseChip value={course.prerequesite} />
          </Typography>
        </Grid>
        <Grid item sx={{ width: 1 }}>
          <CourseStatus canRegister={1} />
        </Grid>
      </Grid>
    </SubCard>
  );
}
