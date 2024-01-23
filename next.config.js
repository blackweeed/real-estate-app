/** @type {import('next').NextConfig} */
const nextConfig = {
	// images: {
	//   domains: ["dq1niho2427i9.cloudfront.net", "real-estate.local"],
	// },
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "real-estate.local",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
