import styled, { keyframes } from "styled-components";

const shine = keyframes`
  to {
		background-position: right -40px top 0;
	}
`;

export const Wrapper = styled.div`
  height: 100px;
  width: 100%;
`;

export const Skeleton = styled.div`
  border-radius: 8px;
  background-color: #e2e5e7;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 40px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  animation: 1s ${shine} ease infinite;
  width: 100%;
  height: 100%;
`;
