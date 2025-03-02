"use client";

import { useState } from "react";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { Field, Fieldset, Input, Label, Textarea } from "@headlessui/react";
import {
	RectangleStackIcon,
	ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { STATUSES } from "@/utils/constants";

export default function AddTask({ onTaskAdded }) {
	const [open, setOpen] = useState(false);
	const [error, setShowError] = useState({
		user: false,
		title: false,
		description: false,
	});
	const [task, setTask] = useState({
		user: "",
		title: "",
		description: "",
		status: STATUSES.PENDING,
		dateCreated: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
		dateUpdated: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTask((prev) => ({ ...prev, [name]: value }));
		setShowError(false);
	};

	const handleSave = async () => {
		// Validate input fields
		setShowError((prevError) => ({
			...prevError,
			user: task.user.trim().length === 0 ? true : prevError.user,
			title: task.title.trim().length === 0 ? true : prevError.title,
			description:
				task.description.trim().length === 0 ? true : prevError.description,
		}));

		if (
			task.user.trim().length === 0 ||
			task.title.trim().length === 0 ||
			task.description.trim().length === 0
		) {
			return;
		}

		setOpen(false); // Close this dialog

		const response = await fetch(
			`${process.env.MINIMAL_TASK_TRACKER_API_URL}/tasks`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				mode: "cors", // Allow cross-origin requests
				body: JSON.stringify(task),
			}
		);

		if (!response.ok) {
			throw new Error("Network response was not OK");
		} else {
			onTaskAdded(); // Refresh tasks after saving

			// Reset task fields
			setTask({
				user: "",
				title: "",
				description: "",
				status: STATUSES.PENDING,
				dateCreated: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
				dateUpdated: "",
			});
		}
	};

	return (
		<div className="flex flex-col @md:flex-row absolute inset-y-0 right-0 w-auto">
			<button
				type="button"
				onClick={() => setOpen(true)}
				className="flex w-full justify-center p-4 rounded-full bg-indigo-600 text-base font-medium text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="size-5"
				>
					<path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
				</svg>
				&nbsp;&nbsp;Add task&nbsp;
			</button>

			<div>
				<Dialog open={open} onClose={setOpen} className="relative z-10">
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
					/>

					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<DialogPanel
								transition
								className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
							>
								<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
											<RectangleStackIcon
												aria-hidden="true"
												className="size-6 text-blue-600"
											/>
										</div>
										<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
											<DialogTitle
												as="h3"
												className="text-base font-semibold text-gray-900"
											>
												Create new task
											</DialogTitle>
											<p className="mt-2 text-sm text-gray-500">
												Stay on top of your work! Fill out the details below to
												add a new task.
											</p>
										</div>
									</div>

									<div className="w-full">
										<div
											className={`px-6 pt-6 text-center sm:mt-0 sm:ml-4 sm:text-left ${
												error.user || error.title || error.description
													? ""
													: "hidden"
											}`}
										>
											<p className="mt-2 text-sm text-red-500">
												<ExclamationTriangleIcon
													aria-hidden="true"
													className="size-7 text-red-600 inline pe-2"
												/>
												An error has occured.
											</p>
											<p
												className={`mt-2 text-xs text-red-400 ${
													error.user ? "" : "hidden"
												}`}
											>
												* Please specify value for Username"
											</p>
											<p
												className={`mt-2 text-xs text-red-400 ${
													error.title ? "" : "hidden"
												}`}
											>
												* Please specify value for Task title"
											</p>
											<p
												className={`mt-2 text-xs text-red-400 ${
													error.description ? "" : "hidden"
												}`}
											>
												* Please specify value for Task description"
											</p>
										</div>

										<Fieldset className="space-y-6 rounded-xl px-6 pb-6 sm:px-10 sm:pt-4">
											<Field>
												<Label
													className={`text-sm/6 font-medium ${
														error.user ? "text-red-500" : "text-gray-500"
													}`}
												>
													*Username
												</Label>
												<Input
													name="user"
													value={task.user}
													onChange={handleChange}
													className={clsx(
														"mt-3 block w-full rounded-lg border-3 bg-white/5 py-1.5 px-3 text-sm/6 text-gray-500",
														"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
														{
															"border-red-100": error.user,
															"border-gray-100": !error.user,
														}
													)}
												/>
											</Field>

											<Field>
												<Label
													className={`text-sm/6 font-medium ${
														error.title ? "text-red-500" : "text-gray-500"
													}`}
												>
													*Task title
												</Label>
												<Input
													name="title"
													value={task.title}
													onChange={handleChange}
													className={clsx(
														"mt-3 block w-full rounded-lg border-3 bg-white/5 py-1.5 px-3 text-sm/6 text-gray-500",
														"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
														{
															"border-red-100": error.title,
															"border-gray-100": !error.title,
														}
													)}
												/>
											</Field>

											<Field>
												<Label
													className={`text-sm/6 font-medium ${
														error.title ? "text-red-500" : "text-gray-500"
													}`}
												>
													*Task description
												</Label>
												<Textarea
													name="description"
													value={task.description}
													onChange={handleChange}
													className={clsx(
														"mt-3 block w-full resize-none rounded-lg border-3 bg-white/5 py-1.5 px-3 text-sm/6 text-gray-500",
														"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
														{
															"border-red-100": error.description,
															"border-gray-100": !error.description,
														}
													)}
													rows={3}
												/>
											</Field>
										</Fieldset>
									</div>
								</div>

								<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="button"
										onClick={handleSave}
										className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:ml-3 sm:w-auto"
									>
										Save
									</button>
									<button
										type="button"
										data-autofocus
										onClick={() => setOpen(false)}
										className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
									>
										Cancel
									</button>
								</div>
							</DialogPanel>
						</div>
					</div>
				</Dialog>
			</div>
		</div>
	);
}
