/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	async rewrites() {
		return [
			{
				source: "/",
				destination: "/dashboard",
			},
		];
	},
	env: {
		MINIMAL_TASK_TRACKER_API_URL: "http://localhost:3000/api",
	},
};

export default nextConfig;
