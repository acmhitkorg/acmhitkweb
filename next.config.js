/** @type {import('next').NextConfig} */
const isStatic = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true'
const nextConfig = {
	output: isStatic ? 'export' : undefined,
	trailingSlash: true,
	images: {
		unoptimized: isStatic
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: { unoptimized: true },
};

module.exports = nextConfig;
