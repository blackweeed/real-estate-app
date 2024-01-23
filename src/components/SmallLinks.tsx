import Link from "next/link";

export const SmallLinks = () => {
	return (
		<>
			<div className="mt-8 lg:mt-0">
				<h4 className="mb-6 font-semibold text-gray-500">MARKETING & REACH</h4>
				<ul className="flex flex-col gap-3">
					<Link className="font-semibold text-blue-600" href={``}>
						SERHANT. Studios
					</Link>
					<Link className="font-semibold text-blue-600" href={``}>
						SERHANT. ADX
					</Link>
					<Link className="font-semibold text-blue-600" href={``}>
						SERHANT. ID Lab
					</Link>
				</ul>
			</div>
			<div>
				<h4 className="mb-6 mt-6 font-semibold text-gray-500 lg:mt-0">COMPANY</h4>
				<ul className="flex flex-col gap-3">
					<Link className="font-semibold text-blue-600" href={``}>
						About
					</Link>
					<Link className="font-semibold text-blue-600" href={``}>
						Referrals
					</Link>
					<Link className="font-semibold text-blue-600" href={``}>
						Carrers
					</Link>
					<Link className="font-semibold text-blue-600" href={``}>
						Anual letter
					</Link>
				</ul>
			</div>
			<div>
				<h4 className="mb-6 mt-6 font-semibold text-gray-500 lg:mt-0">INSIGHTS</h4>
				<ul className="flex flex-col gap-3">
					<Link className="font-semibold text-blue-600" href={``}>
						Blog
					</Link>
					<Link className="font-semibold text-blue-600" href={``}>
						Books
					</Link>
					<Link className="font-semibold text-blue-600" href={``}>
						Guide
					</Link>
					<Link className="font-semibold text-blue-600" href={``}>
						Courses
					</Link>
				</ul>
			</div>
		</>
	);
};
