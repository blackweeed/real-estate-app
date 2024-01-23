import { useFormStatus } from "react-dom";

export function SubmitButton({ messagePopup, setMessagePopup, message }) {
	const { pending } = useFormStatus();

	return (
		<>
			{messagePopup && (
				<div
					className="fixed left-0 right-0 top-0 z-10 flex h-screen w-full items-center justify-center bg-black/30 "
					onClick={() => setMessagePopup(false)}
				>
					<div className="z-20 flex h-[400px] w-[500px] items-center rounded-lg bg-white px-10 text-center">
						<p
							dangerouslySetInnerHTML={{
								__html: message,
							}}
						/>
					</div>
				</div>
			)}
			<button
				type="submit"
				aria-disabled={pending}
				className={`rounded-full bg-blue-600 px-8 py-3 text-white ${pending && "bg-red-600"}`}
			>
				{pending ? "..." : "Wyślij"}
			</button>
		</>
	);
}
