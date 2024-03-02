// import { COOKIE_NAME } from "@/constants";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { SignInForm } from "@/api/forms";

const COOKIE_NAME = "OurSiteJWT";
const MAX_AGE = 60 * 60 * 24 * 30; // days;

export async function POST(request: Request) {
	const body = await request.json();

	const { username, password } = body;

	const loginData = await SignInForm(username, password);

	// if (username !== "admin" || password !== "admin") {
	// 	return NextResponse.json(
	// 		{
	// 			message: "Unauthorized",
	// 		},
	// 		{
	// 			status: 401,
	// 		},
	// 	);
	// }

	// Always check this
	const secret = loginData.login?.authToken;

	const seralized = serialize(COOKIE_NAME, secret, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: MAX_AGE,
		path: "/",
	});

	const response = {
		message: "Authenticated!",
	};

	return new Response(JSON.stringify(response), {
		status: 200,
		headers: { "Set-Cookie": seralized },
	});
}
