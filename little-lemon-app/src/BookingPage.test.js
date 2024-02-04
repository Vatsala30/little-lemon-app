import { render, screen } from "@testing-library/react";
import {BookingPage, initializeTimes, updateTimes} from "./BookingPage";
import { fetchAPI,submitAPI} from "./mockAPI";
import BookingForm from "./BookingForm";



const mockBookingForm = jest.fn();
jest.mock("./BookingForm",()=> (props)=>{
  mockBookingForm(props);
  return <div/>;
})

const mockBookingHeader = jest.fn();
jest.mock("./BookingHeader",()=> ()=>{
  mockBookingHeader();
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

//const mockAPI = jest.mock('./mockAPI', () => ( jest.fn()));
const mockAPI = require("./mockAPI");
jest.mock('./mockAPI');


const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));


test('Renders the BookingPage heading',  () => {
//mockAPI.fetchAPI = jest.fn((date) => ["9:00","13:00","20:00"]);
//mockAPI.submitAPI = jest.fn((formData) => true);
 mockAPI.fetchAPI.mockReturnValue( ["9:00","13:00","20:00"]);
 mockAPI.submitAPI.mockReturnValue(true); 
  render(<BookingPage />);
  const headingElement = screen.getByTestId("header");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.textContent).toBe("Reserve a table!!")
});

test('Initializes available times',  () => {
  mockAPI.fetchAPI.mockReturnValue( ["9:00","13:00","20:00"]);
 mockAPI.submitAPI.mockReturnValue(true);
  render(<BookingPage />);
  const expectedInitialTimes = ["9:00","13:00","20:00"];
  const actualInitialTimes = initializeTimes();
  expect(actualInitialTimes).toEqual(expectedInitialTimes);
});


test('updateTimes on the basis of date passed', () => {
  mockAPI.fetchAPI.mockReturnValue( ["9:00","13:00","20:00"]);
 mockAPI.submitAPI.mockReturnValue(true);
  render(<BookingPage />);
  const expectedInitialTimes = ["9:00","13:00","20:00"];
  const state = ["9:00","13:00","20:00"];
    const action = { date : "2024-01-30"};
  expect(updateTimes(state, action)).toEqual(expectedInitialTimes);
});



