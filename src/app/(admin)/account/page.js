"use client";

export default function Account() {
	return (
		<div>
			<div className="p-10 m-5 border-b-3 border-gray-100">
				<div className="flex flex-nowrap gap-10 relative">
					<div className="flex flex-col @md:flex-row">
						<span className="text-3xl/9 font-bold tracking-tight text-gray-900">
							Account
						</span>
					</div>
				</div>
			</div>

			<div className="p-10">
				<div className="flex flex-nowrap gap-10">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="size-10 text-red-500"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
						/>
					</svg>
					<p className="text-2xl text-red-500">
						This page is under construction.
					</p>
				</div>
			</div>
		</div>
	);
}
