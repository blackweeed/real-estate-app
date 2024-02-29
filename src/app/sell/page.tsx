import { GetInTouch } from "@/components/GetInTouch";

export default async function Sell() {
	return (
		<section className="mt-32">
			<section className=" -top-10 z-30 rounded-t-3xl bg-white px-6 pt-10 lg:px-20">
				<div className="mb-8 flex items-center justify-center">
					<div className="mb-5">
						<h2 className="text-3xl font-semibold text-blue-600 lg:text-4xl">
							Chcesz wystawić swoją nieruchomość na sprzedaż?
						</h2>
					</div>
				</div>
			</section>
			<GetInTouch />
		</section>
	);
}
