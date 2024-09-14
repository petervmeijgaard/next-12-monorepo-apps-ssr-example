import type { PropsWithChildren } from "react";

import {
	ApplicationContext,
	type ApplicationContextType,
} from "./ApplicationContext.js";

type Props = PropsWithChildren<ApplicationContextType>;

export function ApplicationProvider({ applicationData, children }: Props) {
	return (
		<ApplicationContext.Provider value={{ applicationData }}>
			{children}
		</ApplicationContext.Provider>
	);
}
