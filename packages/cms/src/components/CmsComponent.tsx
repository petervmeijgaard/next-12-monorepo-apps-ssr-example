import type { Entry } from "../types.js";

import { Application } from "./Application.js";
import { Link } from "./Link.js";

export function CmsComponent(props: Entry) {
	switch (props.type) {
		case "application":
			return <Application {...props} />;
		case "link":
			return <Link {...props} />;
	}
}
