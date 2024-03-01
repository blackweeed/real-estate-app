"use server";
import axios, { AxiosError } from "axios";
import { SignInForm, SignUpForm, SubmitContactForm } from "@/api/forms";

export async function submitForm(
	prevState: {
		message: string;
	},
	formData: FormData,
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
		data.yourMessage,
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

export const createAccount = async (formData: FormData) => {
	"use server";

	const username = formData.get("username");
	const firstName = formData.get("firstName");
	const lastName = formData.get("lastName");
	const email = formData.get("email");
	const password = formData.get("password");

	const response = await SignUpForm(username, email, firstName, lastName, password);

	console.log({ username, email, firstName, lastName, password });
	return response;
};

export const loginUser = async (formData: FormData) => {
	"use server";

	const userName = formData.get("username");
	const password = formData.get("password");

	const response = await SignInForm(userName, password);

	const payload = {
		username: userName,
		password: password,
	};

	try {
		const { data } = await axios.post("/api/auth/login", payload);

		alert(JSON.stringify(data));

		// redirect the user to /dashboard
		// push("/dashboard");
		console.log("HURARAR");
	} catch (e) {
		const error = e as AxiosError;

		alert(error.message);
	}

	console.log({ userName, password, response });
	return response;
};
