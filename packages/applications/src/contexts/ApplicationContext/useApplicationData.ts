import { useSafeContext } from "../../hooks/useSafeContext.js";
import { ApplicationContext } from "./ApplicationContext.js";

export const useApplicationData = (id: string) => {
	const { applicationData } = useSafeContext(ApplicationContext);

	const data = applicationData.find((data) => data.id === id);

	if (!data) {
		throw new Error(`No data found for key ${id}`);
	}

	return data;
};
