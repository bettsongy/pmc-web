import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Typography, Box } from '@mui/material';

let ratings = [];
let semesters = [];
let option = {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    },
  },
  grid: {
    top: '10%',
    left: '10%',
    bottom: '20%',
  },
  title: {
    left: 'center',
    text: '',
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: semesters,
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    max: 5,
    show: false,
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 100,
    },
    {
      start: 0,
      end: 100,
    },
  ],
  series: [
    {
      name: 'Average Ratings',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {},
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 1,
            color: '#F18C8E',
          },
          {
            offset: 0.75,
            color: '#F0B7A4',
          },
          {
            offset: 0.5,
            color: '#F1D1B5 ',
          },
          {
            offset: 0.25,
            color: '#568EA6',
          },
          {
            offset: 0,
            color: '#305F72',
          },
        ]),
      },
      data: ratings,
      smooth: true,
    },
  ],
};

function populateDataset(courseTrend) {
  // Clear out the data from both the variables and also the option so that its not pushing duplicate data
  option.xAxis.data = [];
  option.series[0].data = [];
  semesters = [];
  ratings = [];
  for (let i = 0; i < courseTrend.length; i++) {
    semesters.push(courseTrend[i].semesterName);
    ratings.push(courseTrend[i].rating);
  }
  option.xAxis.data = semesters;
  option.series[0].data = ratings;
}

function getSeasonVal(season) {
  switch (season) {
    case 'Spring':
      return 0;
    case 'Summer':
      return 1;
    case 'Fall':
      return 2;
    default:
      return 0;
  }
}

// Sort by the year and then the semester
// aStr[0] and bStr[0] are the year
function sortDataset(courseTrend) {
  courseTrend.sort((a, b) => {
    let aStr = a.semesterName.split(' ');
    let bStr = b.semesterName.split(' ');
    let aSeason = getSeasonVal(aStr[0]);
    let bSeason = getSeasonVal(bStr[0]);
    return parseInt(aStr[1] - bStr[1]) * 100000 + (aSeason - bSeason);
  });
}

export default function StatsDetailedCard({ courseTrend }) {
  sortDataset(courseTrend);
  populateDataset(courseTrend);
  return (
    <Box>
      <Typography variant='subtitle2'>Average Ratings / Professors</Typography>
      <ReactECharts option={option} style={{ height: 200 }} onEvents={{}} />
    </Box>
  );
}
