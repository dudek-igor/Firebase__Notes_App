import React from 'react';
import { SiFirebase, SiReact } from 'react-icons/si';
// Styles
import { StyledWrapper, SVGWrapper } from './Home.styled';

const SVG = [
  {
    id: 0,
    color: '#FFCA28',
    svg: <SiFirebase />,
    strokeDashoffset: -120,
  },
  {
    id: 1,
    color: '#61DAFB',
    svg: <SiReact />,
    strokeDashoffset: -80,
  },
];

const Home = () => {
  return (
    <StyledWrapper>
      {SVG.map(({ id, color, svg }, index) => (
        <SVGWrapper key={id} color={color} index={index}>
          {svg}
        </SVGWrapper>
      ))}
    </StyledWrapper>
  );
};

export default Home;
