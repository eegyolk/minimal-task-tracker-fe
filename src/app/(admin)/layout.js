import "../globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full bg-white">
			<body className="h-full">
				{/* Menu Section */}
				<div className="flex h-screen">
					<div className="w-64 bg-white p-4 flex flex-col">
						<button className="mb-4 flex items-center space-x-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
								/>
							</svg>
							<span className="text-lg font-semibold">Task Tracker</span>
						</button>

						<nav className="flex-1">
							<ul className="space-y-4">
								<li className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="size-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
										/>
									</svg>
									<Link href="/dashboard" className="ml-2">
										Dashboard
									</Link>
								</li>
								<li className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="size-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
										/>
									</svg>
									<Link href="/tasks" className="ml-2">
										Tasks
									</Link>
								</li>
								<li className="flex items-center p-3 text-gray-700 hover:bg-gray-200 rounded-lg">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="size-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
										/>
									</svg>
									<Link href="/account" className="ml-2">
										Account
									</Link>
								</li>
							</ul>
						</nav>
					</div>

					{/* Content Section */}
					<div className="flex-1 h-screen overflow-y-auto">
						<div className="bg-gray-50 p-4 flex flex-col">{children}</div>
					</div>
				</div>
			</body>
		</html>
	);
}
