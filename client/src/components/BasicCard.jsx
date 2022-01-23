import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275, }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          MESSAGE:
        </Typography>
        <Typography variant="h3" component="div">
          {props.message}
        </Typography>
       
      </CardContent>
    </Card>
  );
}