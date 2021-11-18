import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import Scheduler from '../components/Scheduler';
import Footer from '../components/Footer';

import ClassCard from '../components/ClassCard';

export default function HomePage() {
  const [shouldShowScheduler, setShouldShowScheduler] = useState(true);
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs sx={{ marginTop: '24px', overflow: 'auto' }}>
          {/* The following is for place-holding only; we should create a component for result/
           * recommendation lists */}
          <Button onClick={() => setShouldShowScheduler(!shouldShowScheduler)}>
            {shouldShowScheduler ? 'Hide' : 'Show'} scheduler
          </Button>
          {/* {[...new Array(5)].map((_, i) => (
            <ClassResultItem key={i} />
          ))} */}
        </Grid>
      </Grid>
      {cards.map((card) => (
        <ClassCard />
      ))}
      {shouldShowScheduler && (
        <Grid item xs={3} sx={{ margin: '24px' }}>
          <Scheduler />
        </Grid>
      )}
      <Footer />
    </>
  );
}
