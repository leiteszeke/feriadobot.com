// Dependencis
import React from "react";
import moment from "moment";
// Styles
import {
  CalendarWrapper,
  CalendarHeader,
  CalendarBody,
  CalendarFooter
} from "./styles";

const CalendarItem = ({ date, name }) => (
  <CalendarWrapper>
    <CalendarHeader>{moment(date).format("MMM")}</CalendarHeader>
    <CalendarBody>{moment(date).format("DD")}</CalendarBody>
    <CalendarFooter>{name}</CalendarFooter>
  </CalendarWrapper>
);

export default CalendarItem;
