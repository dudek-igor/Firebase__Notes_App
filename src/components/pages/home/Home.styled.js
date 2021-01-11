import styled, { keyframes } from 'styled-components';

const animateSVG = keyframes`
  0% {
    stroke-dashoffset: -60;
    fill: transparent;
    }
  80% {
    stroke-dashoffset: ${({ strokeDashoffset }) => strokeDashoffset};
    fill: transparent;
  }
  100% {
    stroke-dashoffset: ${({ strokeDashoffset }) => strokeDashoffset};
    fill: ${({ color }) => color};
  }
}`;

export const StyledWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100vh - 96px);
`;

export const SVGWrapper = styled.div`
  width: 80px;
  height: 80px;
  svg {
    width: 100%;
    height: auto;
    stroke-width: 0.3;
    stroke: ${({ color }) => color};
    stroke-dasharray: 60;
    stroke-dashoffset: ${({ strokeDashoffset }) => strokeDashoffset};
    animation: 2s ${animateSVG} ease-in-out ${({ index }) => 1 * index}s both;
    fill: ${({ color }) => color};
  }
`;
