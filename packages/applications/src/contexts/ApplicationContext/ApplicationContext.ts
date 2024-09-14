import { createContext } from "react";

import type { ComponentMapping } from "../../types.js";

export type ApplicationContextType = {
	applicationData: Array<ComponentMapping>;
};

export const ApplicationContext = createContext<
	ApplicationContextType | undefined
>(undefined);
