import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./BookingPage";
import { fireEvent } from "@testing-library/react";

test("User is not able to submit the form if the number of guests is less than 1", () => {
    const submitForm = jest.fn();
    render(<BookingForm availableTimes={initializeTimes} updateTimes={updateTimes} onSubmitForm ={submitForm}/>);
    const guests = screen.getByLabelText('Number of guests',{exact:false});
    fireEvent.change(guests, { target: { value: 0 } });
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(submitForm).not.toHaveBeenCalled();
  });

  test("User is not able to submit the form if the date is not passed", () => {
    const submitForm = jest.fn();
    render(<BookingForm availableTimes={initializeTimes} updateTimes={updateTimes} onSubmitForm ={submitForm}/>);
    const resDate = screen.getByLabelText('Choose date',{exact:false});
    fireEvent.change(resDate, { target: { value: "" } });
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(submitForm).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });

  test("User is not able to submit the form if the time is not passed", () => {
    const submitForm = jest.fn();
    render(<BookingForm availableTimes={initializeTimes} updateTimes={updateTimes} onSubmitForm ={submitForm}/>);
    const resTime = screen.getByLabelText('Choose time',{exact:false});
    fireEvent.change(resTime, { target: { value: "--- Select a Time ---" } });
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(submitForm).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });

  test("User is not able to submit the form if the occasion is not passed", () => {
    const submitForm = jest.fn();
    render(<BookingForm availableTimes={initializeTimes} updateTimes={updateTimes} onSubmitForm ={submitForm}/>);
    const occasion = screen.getByLabelText('Choose time',{exact:false});
    fireEvent.change(occasion, { target: { value: "--- Select an Occasion ---" } });
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
    expect(submitForm).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });

