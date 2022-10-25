import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

const data = [
  {
    subject: "Infrastructure",
    A: 100,
    B: 50,
    fullMark: 100,
  },
  {
    subject: "Development",
    A: 100,
    B: 25,
    fullMark: 100,
  },
  {
    subject: "Development Process",
    A: 100,
    B: 50,
    fullMark: 100,
  },
  {
    subject: "Application",
    A: 100,
    B: 75,
    fullMark: 100,
  },
  {
    subject: "User Interface",
    A: 100,
    B: 25,
    fullMark: 100,
  },
  {
    subject: "Reporting & Analytics",
    A: 100,
    B: 25,
    fullMark: 100,
  },
];

export const InteractiveRadarChart = () => {
  return (
    <>
      <div>
        <FormControl sx={{ m: 1, width: 150, mt: 3 }}>
          <InputLabel>Development</InputLabel>
          <Select label="Infrastructure" value={50}>
            <MenuItem value={0}>0%</MenuItem>
            <MenuItem value={25}>25%</MenuItem>
            <MenuItem value={50}>50%</MenuItem>
            <MenuItem value={75}>75%</MenuItem>
            <MenuItem value={100}>100%</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 150, mt: 3 }}>
          <InputLabel>Development</InputLabel>
          <Select label="Development" value={25}>
            <MenuItem value={0}>0%</MenuItem>
            <MenuItem value={25}>25%</MenuItem>
            <MenuItem value={50}>50%</MenuItem>
            <MenuItem value={75}>75%</MenuItem>
            <MenuItem value={100}>100%</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 150, mt: 3 }}>
          <InputLabel>Development Process</InputLabel>
          <Select label="Development Process" value={50}>
            <MenuItem value={0}>0%</MenuItem>
            <MenuItem value={25}>25%</MenuItem>
            <MenuItem value={50}>50%</MenuItem>
            <MenuItem value={75}>75%</MenuItem>
            <MenuItem value={100}>100%</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 150, mt: 3 }}>
          <InputLabel>Application</InputLabel>
          <Select label="Application" value={75}>
            <MenuItem value={0}>0%</MenuItem>
            <MenuItem value={25}>25%</MenuItem>
            <MenuItem value={50}>50%</MenuItem>
            <MenuItem value={75}>75%</MenuItem>
            <MenuItem value={100}>100%</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 150, mt: 3 }}>
          <InputLabel>User Interface</InputLabel>
          <Select label="User Interface" value={25}>
            <MenuItem value={0}>0%</MenuItem>
            <MenuItem value={25}>25%</MenuItem>
            <MenuItem value={50}>50%</MenuItem>
            <MenuItem value={75}>75%</MenuItem>
            <MenuItem value={100}>100%</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 150, mt: 3 }}>
          <InputLabel>Reporting & Analytics</InputLabel>
          <Select label="Reporting & Analytics" value={25}>
            <MenuItem value={0}>0%</MenuItem>
            <MenuItem value={25}>25%</MenuItem>
            <MenuItem value={50}>50%</MenuItem>
            <MenuItem value={75}>75%</MenuItem>
            <MenuItem value={100}>100%</MenuItem>
          </Select>
        </FormControl>
      </div>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Desired State"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Sheet Metal Connectors PCR"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </>
  );
};
