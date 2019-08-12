import React from "react";
import Login from "../components/forms/Login";
import { render, fireEvent } from "@testing-library/react";

import { Formik } from "formik";

// test("should have validation error given input field is touched and error exists on form", async () => {
//   const fieldName = "username";
//   const labelName = "username";
//   const { getByLabelText, findByTestId } = render(<Login />);

//   const input = getByLabelText(labelName);

//   // Call blur without inputting anything which should trigger a validation error
//   fireEvent.blur(input);

//   const validationErrors = await findByTestId(`error-card`);
//   debug(validationErrors);
//   expect(validationErrors.innerHTML).toBe("Required.");
// });
