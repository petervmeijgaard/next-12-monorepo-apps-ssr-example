import { APPLICATION_NAMES } from "../constants.js";
import { type ApplicationName } from "../types.js";

export const isCorrectApplicationName = (
	name: string,
): name is ApplicationName => {
	return APPLICATION_NAMES.includes(name as ApplicationName);
};
