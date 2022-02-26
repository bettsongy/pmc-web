import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Card, CardActions, Divider, IconButton, Tooltip } from '@mui/material';
import { Edit, Info } from '@material-ui/icons';

export default function TimeDataCard({
  data: { title, subtitle, description, coursePageURL, topBorderColor = 'gray' },
  hasConflicts = false,
  onLinkClick = () => {},
}) {
  return (
    <Card
      sx={{
        position: 'relative',
        width: '324px',
        padding: '0px 16px 16px',
        borderTop: '8px solid ' + topBorderColor,
        boxShadow: 2,
      }}
    >
      <h3>{title}</h3>
      <div style={{ marginTop: '-12px' }}>{subtitle}</div>
      <Divider sx={{ margin: '12px 0px' }} />
      <div style={{ lineHeight: '1.5em' }}>{description}</div>
      {hasConflicts && (
        <Alert
          severity='warning'
          sx={{ display: 'flex', alignItems: 'center', height: '24px', margin: '8px 0' }}
        >
          Conflicts with another event.
        </Alert>
      )}
      <CardActions sx={{ padding: '12px 0 0', margin: '-8px' }}>
        <Tooltip title='Edit' disableInteractive>
          {/* TODO Q: The edit link should link to course page with scroll bar location
           *  pointed at the offering listing table. */}
          <IconButton
            component={Link}
            to={coursePageURL + '/registration'}
            onClick={onLinkClick}
          >
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title='Course Details' disableInteractive>
          <IconButton component={Link} to={coursePageURL} onClick={onLinkClick}>
            <Info />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
