/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Line } from "react-chartjs-2";

export default function Chart({onChartClick, data1, data2, data3, options }) {
  return (
    <>
      <ChartDiv>
        <Line data={data1} options={options}></Line>
        <button onClick={onChartClick}>
          111年度新竹市警察局每月交通事故統計A1
        </button>
      </ChartDiv>
      <ChartDiv>
        <Line data={data2} options={options}></Line>
        <button onClick={onChartClick}>
          111年度新竹市警察局每月交通事故統計A2
        </button>
      </ChartDiv>
      <ChartDiv>
        <Line data={data3} options={options}></Line>
        <button onClick={onChartClick}>
          111年度新竹市警察局每月交通事故統計A3
        </button>
      </ChartDiv>
    </>
  );
}

const ChartDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
