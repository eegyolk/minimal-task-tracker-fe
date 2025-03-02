"use client";

import TaskItem from "./task-item";
import { STATUSES, COLOR_CLASSES } from "@//utils/constants";

const bgColorClasses = {
	yellow: "bg-yellow-100/50",
	purple: "bg-purple-100/50",
	green: "bg-green-100/50",
	red: "bg-red-100/50",
};

const textColorClasses = {
	yellow: "text-yellow-500",
	purple: "text-purple-500",
	green: "text-green-500",
	red: "text-red-500",
};

export default function PerStatus({
	onTaskUpdated,
	data,
	status,
	color = COLOR_CLASSES.YELLOW,
}) {
	let statusValue = "To do"; // STATUSES.PENDING
	if (STATUSES.IN_PROGRESS === status) statusValue = "On going";
	else if (STATUSES.COMPLETED === status) statusValue = "Done";
	else if (STATUSES.INCOMPLETE === status) statusValue = "Incomplete";

	const filteredTasks = data.filter((row) => status === row.status);

	return (
		<div className="flex flex-col @md:flex-row w-10/12">
			<div className={`${bgColorClasses[color]} rounded-4xl p-8`}>
				<div className="p-4">
					<span className={`${textColorClasses[color]} text-xl font-semibold`}>
						{statusValue} ({filteredTasks.length}/{data.length})
					</span>
				</div>

				<div className="p-2">
					{filteredTasks.length > 0 ? (
						filteredTasks.map((row) => {
							return (
								<TaskItem
									onTaskUpdated={onTaskUpdated}
									key={row.id}
									task={row}
								/>
							);
						})
					) : (
						<p className="text-sm/6 text-gray/50">
							No data was found for this status.
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
