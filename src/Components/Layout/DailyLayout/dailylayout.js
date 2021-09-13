import React from 'react';
import styled from 'styled-components';
import DailyWeather from '../../DailyWeather/dailyweather';
import WeatherPreview from '../../WeatherPreview/weatherpreview';
const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const DailyLayout = () => {
  return (
    <Section>
      <DailyWeather />
      <WeatherPreview />
    </Section>
  );
};

export default DailyLayout;
