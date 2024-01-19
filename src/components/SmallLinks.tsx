import Link from "next/link";

export const SmallLinks = () => {
  return (
    <>
      <div>
        <h4 className="font-semibold text-gray-500 mb-6">MARKETING & REACH</h4>
        <ul className="flex flex-col gap-3">
          <Link className="text-blue-600 font-semibold" href={``}>
            SERHANT. Studios
          </Link>
          <Link className="text-blue-600 font-semibold" href={``}>
            SERHANT. ADX
          </Link>
          <Link className="text-blue-600 font-semibold" href={``}>
            SERHANT. ID Lab
          </Link>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-500 mb-6">COMPANY</h4>
        <ul className="flex flex-col gap-3">
          <Link className="text-blue-600 font-semibold" href={``}>
            About
          </Link>
          <Link className="text-blue-600 font-semibold" href={``}>
            Referrals
          </Link>
          <Link className="text-blue-600 font-semibold" href={``}>
            Carrers
          </Link>
          <Link className="text-blue-600 font-semibold" href={``}>
            Anual letter
          </Link>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-500 mb-6">INSIGHTS</h4>
        <ul className="flex flex-col gap-3">
          <Link className="text-blue-600 font-semibold" href={``}>
            Blog
          </Link>
          <Link className="text-blue-600 font-semibold" href={``}>
            Books
          </Link>
          <Link className="text-blue-600 font-semibold" href={``}>
            Guide
          </Link>
          <Link className="text-blue-600 font-semibold" href={``}>
            Courses
          </Link>
        </ul>
      </div>
    </>
  );
};
