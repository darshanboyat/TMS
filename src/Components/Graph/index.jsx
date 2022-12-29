import axios from "axios";
import { useEffect, useState } from "react";
import './Graph.css'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
import { Box } from "@mui/material";



function PieRechartComponent() {
  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  const data = [
    {
      name: "Upcoming ",
      task: '1'
    },
    {
      name: "Pending ",
      task: '2'
    },
    {
      name: "On-Going ",
      task: '3'
    },
    {
      name: "Completed ",
      task: '2.5'
    },
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc"
          }}
        >
        </div>
      );
    }
    return null;
  };

  return (
    <Box>
      <BarChart
        width={350}
        height={300}
        data={data}
        style={{ margin: '5px 30px 5px 0rem', fontSize: 7, }}
        className="barchart"
      >
        <XAxis dataKey="name" style={{fontWeight: "bold", fontSize: 10}}/>
        <YAxis />
        <Tooltip />
        <Bar width={1} dataKey="task" className="bar" fill="#f39573" />
      </BarChart>
    </Box>
  );
}
export default PieRechartComponent;