// Dependencies
import styled from "styled-components";

export const CalendarWrapper = styled.div`
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  height: 180px;
  margin: 4px;
  margin-bottom: 20px;
  width: 250px;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

export const CalendarHeader = styled.div`
  align-items: center;
  background: #2873b4;
  border-radius: 4px 4px 0 0;
  color: #ffffff;
  display: flex;
  font-size: 24px;
  height: 40px;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
`;

export const CalendarBody = styled.div`
  align-items: center;
  color: #2873b4;
  display: flex;
  font-size: 80px;
  font-weight: 700;
  height: 90px;
  justify-content: center;
  width: 100%;
`;

export const CalendarFooter = styled.div`
  align-items: center;
  color: #2873b4;
  display: flex;
  font-size: 18px;
  height: 44px;
  line-height: 22px;
  justify-content: center;
  text-align: center;
  width: 100%;
`;
