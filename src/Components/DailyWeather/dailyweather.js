import React from 'react';
import styled from 'styled-components';
import Image from '../../Assets/WeatherImages/sunny.svg';
const Container = styled.div``;

const Header = styled.h1`
  text-align: center;
`;

const Temperature = styled.p`
  text-align: center;
  margin: 0;
  font-size: 75px;
`;

const WeatherImage = styled.img`
  width: 250px;
  height: 250px;
  display: block;
  margin: 0 auto;
`;

const DailyWeather = () => {
  return (
    <Container>
      <Header>Mobile</Header>
      <WeatherImage src={Image} />
      <Temperature>20° sunny</Temperature>
    </Container>
  );
};

export default DailyWeather;
