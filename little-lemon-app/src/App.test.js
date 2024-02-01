import { render, screen } from "@testing-library/react";
import {BookingPage, initializeTimes, updateTimes} from "./BookingPage";



const mockBookingForm = jest.fn();
jest.mock("./BookingForm",()=> (props)=>{
  mockBookingForm(props);
  return <div/>;
})

const mockBookings = jest.fn();
jest.mock("./Bookings",()=> (props)=>{
  mockBookings(props);
  return <div/>;
})

const mockNav = jest.fn();
jest.mock("./Nav",()=> ()=>{
  mockNav();
  return <div/>;
})

const mockHeader = jest.fn();
jest.mock("./Header",()=> ()=>{
  mockHeader();
  return <div/>;
})

const mockFooter = jest.fn();
jest.mock("./Footer",()=> ()=>{
  mockFooter();
  return <div/>;
})

test('Renders the BookingPage heading',  () => {
  render(<BookingPage />);
  const headingElement = screen.getByTestId("header");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.textContent).toBe("Reserve a table!!")
})

test('Initializes available times',  () => {
  const expectedInitialTimes = ["9:00","13:00","20:00"];
  const actualInitialTimes = initializeTimes();
  expect(actualInitialTimes).toEqual(expectedInitialTimes);
})


test('updateTimes on the basis of date passed', () => {
  render(<BookingPage />);
  const expectedInitialTimes = ["9:00","13:00","20:00","21:00"];
  const state = ["9:00","13:00","20:00"];
    const action = { date : "2024-01-30"};
  expect(updateTimes(state, action)).toEqual(expectedInitialTimes);
})

