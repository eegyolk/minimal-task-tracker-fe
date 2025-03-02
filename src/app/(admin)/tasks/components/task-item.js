"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CalendarDaysIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import { STATUSES } from "@/utils/constants";

export default function TaskItem({ onTaskUpdated, task }) {
	const { id, title, description, status, dateCreated, dateUpdated } = task;

	let date = dateCreated; // Default for PENDING tasks

	if (STATUSES.PENDING != status) date = dateUpdated;

	const event = new Date(date);

	const statusForUpdate = Object.values(STATUSES).filter(
		(item) => status !== item
	);

	const handleSave = async (newStatus) => {
		delete task.id;
		task.status = newStatus;
		task.dateUpdated = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;

		const response = await fetch(
			`${process.env.MINIMAL_TASK_TRACKER_API_URL}/tasks/${id}`,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				mode: "cors", // Allow cross-origin requests
				body: JSON.stringify(task),
			}
		);

		if (!response.ok) {
			throw new Error("Network response was not OK");
		} else {
			// Refresh tasks after updating
			onTaskUpdated();
		}
	};

	return (
		<div className="bg-white rounded-3xl p-4 mt-4 grid grid-cols-1">
			<div className="p-2">
				<span className="text-gray-900 text-lg">{title}</span>
			</div>

			<div className="p-2">
				<span className="text-gray-500 mb-2">{description}</span>
			</div>

			<div className="p-2 flex w-full">
				<div className="flex-auto text-gray-500 text-xs bg-gray-100 rounded-2xl py-2 ps-2">
					<CalendarDaysIcon
						aria-hidden="true"
						className="-mr-1 size-5 text-gray-800 hover:text-gray-500 inline"
					/>
					<span className="ps-2">{event.toLocaleString()}</span>
				</div>
				<div className="flex-auto text-right relative group">
					<Menu as="div" className="relative inline-block text-left">
						<div>
							<MenuButton className="inline-flex w-full justify-center gap-x-1.5 p-2 border-none rounded-md bg-white text-sm">
								<PencilSquareIcon
									aria-hidden="true"
									className="-mr-1 size-5 text-gray-800 hover:text-gray-500"
								/>
							</MenuButton>
						</div>

						<MenuItems
							transition
							className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
						>
							<div className="py-1">
								{statusForUpdate.map((item) => {
									return (
										<MenuItem key={item}>
											<button
												type="submit"
												onClick={() => handleSave(item)}
												className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
											>
												{item === STATUSES.PENDING
													? "To do"
													: item === STATUSES.IN_PROGRESS
													? "On going"
													: item === STATUSES.COMPLETED
													? "Done"
													: item === STATUSES.INCOMPLETE
													? "Incomplete"
													: "-"}
											</button>
										</MenuItem>
									);
								})}
							</div>
						</MenuItems>
					</Menu>
					<div className="absolute bottom-full right-0 mb-1 hidden group-hover:block text-white bg-gray-800 text-xs rounded py-1 px-2 whitespace-nowrap">
						Click this to change status.
					</div>
				</div>
			</div>
		</div>
	);
}
