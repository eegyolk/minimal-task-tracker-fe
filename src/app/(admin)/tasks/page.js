"use client";

import { useEffect, useState } from "react";
import AddTask from "./components/add-task";
import PerStatus from "./components/per-status";
import { STATUSES, COLOR_CLASSES } from "@/utils/constants";
import SearchTasks from "./components/search-tasks";

export default function Tasks() {
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async (keyword = null) => {
		let url = `${process.env.MINIMAL_TASK_TRACKER_API_URL}/tasks`; // Default url to call
		if (keyword) url += `/search?query=${keyword}`; // Search url

		try {
			const response = await fetch(url, {
				method: "GET",
				headers: { "Content-Type": "application/json" },
				mode: "cors", // Allow cross-origin requests
			});

			if (!response.ok) {
				throw new Error("Network response was not OK");
			}

			const data = await response.json();
			setTasks(data);
		} catch (error) {
			console.error("Error fetching tasks:", error);
		}
	};

	useEffect(() => {
		fetchTasks();
	}, []); // Runs only once when the component mounts

	return (
		<div>
			<div className="p-10 m-5 border-b-3 border-gray-100">
				<div className="flex flex-nowrap gap-10 relative">
					<div className="flex flex-col @md:flex-row">
						<span className="text-3xl/9 font-bold tracking-tight text-gray-900">
							Tasks
						</span>
					</div>

					<SearchTasks onTaskSearching={fetchTasks} />

					<AddTask onTaskAdded={fetchTasks} />
				</div>
			</div>

			<div className="p-10">
				<div className="flex flex-nowrap gap-10">
					<PerStatus
						onTaskUpdated={fetchTasks}
						data={tasks}
						status={STATUSES.PENDING}
						color={COLOR_CLASSES.YELLOW}
					/>

					<PerStatus
						onTaskUpdated={fetchTasks}
						data={tasks}
						status={STATUSES.IN_PROGRESS}
						color={COLOR_CLASSES.PURPLE}
					/>

					<PerStatus
						onTaskUpdated={fetchTasks}
						data={tasks}
						status={STATUSES.COMPLETED}
						color={COLOR_CLASSES.GREEN}
					/>

					<PerStatus
						onTaskUpdated={fetchTasks}
						data={tasks}
						status={STATUSES.INCOMPLETE}
						color={COLOR_CLASSES.RED}
					/>
				</div>
			</div>
		</div>
	);
}
