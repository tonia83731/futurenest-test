import { useState, useEffect } from 'react'

import styled from 'styled-components'
import { breakpoints } from '../style/breakpoints'
import { colorList } from '../style/colorList'
import { MainSection, MainTitle } from './MainPage'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from 'chart.js'

import Header from '../components/Header'
import Chart from '../components/Chart'
import { getCarAccidentInfo } from '../api/getCarAccidentInfo'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
)

export default function ChartPage () {
  const [isLoading, setIsLoading] = useState(true)
  const [chartData, setChartData] = useState([])
  const [isShow, setIsShow] = useState(false)
  const [showData, setShowData] = useState('')

  const data = {
    labels: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月'
    ],
    datasets: [
      {
        label: 'A1件數',
        data: chartData.map((data) => data.A1件數),
        fill: false,
        backgroundColor: '#677510',
        borderColor: '#677510',
        pointBorderColor: '#FFFFFF'
      },
      {
        label: 'A1受傷',
        data: chartData.map((data) => data.A1受傷),
        fill: false,
        backgroundColor: '#B5CC22',
        borderColor: '#B5CC22',
        pointBorderColor: '#323232'
      },
      {
        label: 'A1死亡',
        data: chartData.map((data) => data.A1死亡),
        fill: false,
        backgroundColor: '#F74449',
        borderColor: '#F74449',
        pointBorderColor: '#FFFFFF'
      }
    ]
  }
  const data2 = {
    labels: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月'
    ],
    datasets: [
      {
        label: 'A2件數',
        data: chartData.map((data) => data.A2件數),
        fill: false,
        backgroundColor: '#677510',
        borderColor: '#677510',
        pointBorderColor: '#FFFFFF'
      },
      {
        label: 'A2受傷',
        data: chartData.map((data) => data.A2受傷),
        fill: false,
        backgroundColor: '#B5CC22',
        borderColor: '#B5CC22',
        pointBorderColor: '#323232'
      }
    ]
  }
  const data3 = {
    labels: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月'
    ],
    datasets: [
      {
        label: 'A3件數',
        data: chartData.map((data) => data.A3件數),
        fill: false,
        backgroundColor: '#677510',
        borderColor: '#677510',
        pointBorderColor: '#FFFFFF'
      }
    ]
  }
  const options = {
    plugins: {
      lengend: true
    },
    scales: {}
  }

  const handleChartClick = (e) => {
    const value = e.target.innerText
    console.log(value)
    // console.log(value.includes('A1'))
    if (value === '111年度新竹市警察局每月交通事故統計A1') {
      setIsShow(true)
      setShowData(data)
    } else if (value === '111年度新竹市警察局每月交通事故統計A2') {
      setIsShow(true)
      setShowData(data2)
    } else if (value === '111年度新竹市警察局每月交通事故統計A3') {
      setIsShow(true)
      setShowData(data3)
    }
  }

  useEffect(() => {
    const getCarAccidentInfoAsync = async () => {
      try {
        const res = await getCarAccidentInfo()
        setChartData(res)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    getCarAccidentInfoAsync()
  }, [])
  if (isLoading === true) {
    return (
      <>
        <Header />
        <MainSection>
          <MainTitle>圖表</MainTitle>
          <Loading>Loading...</Loading>
        </MainSection>
      </>
    )
  }
  return (
    <>
      <Header />
      <MainSection>
        <MainTitle>圖表[111 年新竹市警察局每月交通事故統計]</MainTitle>
        <ChartGroup>
          <Chart
            props={chartData}
            onChartClick={handleChartClick}
            data1={data}
            data2={data2}
            data3={data3}
            options={options}
          />
        </ChartGroup>
        <Display>
          {isShow && <Line data={showData} options={options}></Line>}
        </Display>
        <Resourse>
          資料來源:
          <a href="https://data.gov.tw/dataset/166038">政府資料開放平台</a>
        </Resourse>
      </MainSection>
    </>
  )
}

const Loading = styled.p`
  color: ${colorList.dark};
  font-size: 16px;
  @media screen and (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`
const ChartGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media screen and (min-width: ${breakpoints.mobile}) {
  }
`

const Display = styled.div`
  display: none;
  @media screen and (min-width: ${breakpoints.mobile}) {
    display: block;
    width: 100%;
    margin: 32px 0;
  }
`

const Resourse = styled.p`
  margin: 16px 0;
  color: ${colorList.gray_table_border};
  a {
    color: ${colorList.gray_table_border};
    text-decoration: underline;
  }
`
