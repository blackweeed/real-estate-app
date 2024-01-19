"use server";
import { SubmitContactForm } from "@/api/forms";

export async function submitForm(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const data = {
    firstName: formData.get("first_name"),
    secondName: formData.get("second_name"),
    phoneNumber: formData.get("phone_number"),
    yourMessage: formData.get("your_message"),
  };

  const response = await SubmitContactForm(
    data.firstName,
    data.secondName,
    data.phoneNumber,
    data.yourMessage
  );

  console.log("errors", response?.errors);

  if (response?.confirmation) {
    return {
      message: response.confirmation.message ?? "Success message not available",
    };
  }

  if (response?.errors?.[0]?.message) {
    return {
      message: response.errors[0]?.message ?? "Error message not available",
      // message: response.errors[0]?.message ?? "Error message not available",
    };
  }

  return {
    message: "Unknown response",
  };
}
