import { React } from 'react';
import styled from 'styled-components';
import Image from '../../Assets/WeatherImages/snow.svg';
const Container = styled.div`
  margin: 40px 0;
  align-items: center;
`;
const WeatherItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 12px 0;
  align-items: center;
`;
const WeatherImage = styled.img`
  width: 50px;
`;

const DayName = styled.p`
  display: inline;
  font-size: 20px;
`;
const Temperature = styled.p`
  display: inline;
  font-size: 25px;
  margin: 0;
`;

const WeatherPreview = () => {
  return (
    <Container>
      <WeatherItems>
        <WeatherImage src={Image}></WeatherImage>
        <DayName>Today</DayName>
        <Temperature>25°/15°</Temperature>
      </WeatherItems>
      <WeatherItems>
        <WeatherImage src={Image}></WeatherImage>
        <DayName>Today</DayName>
        <Temperature>25°/15°</Temperature>
      </WeatherItems>
      <WeatherItems>
        <WeatherImage src={Image}></WeatherImage>
        <DayName>Today</DayName>
        <Temperature>25°/15°</Temperature>
      </WeatherItems>
    </Container>
  );
};

export default WeatherPreview;
