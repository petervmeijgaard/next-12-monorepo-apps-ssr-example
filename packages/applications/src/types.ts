import type { ApplicationEntry as BaseApplicationEntry } from "@acme/types";

import type { mapToApplicationData } from "./utils/mapToApplicationData.js";

import { type APPLICATION_NAMES } from "./constants.js";

export type ApplicationEntry =
	| BaseApplicationEntry<"webshop-home-page">
	| BaseApplicationEntry<"webshop-product-detail-page">
	| BaseApplicationEntry<"webshop-product-listing-page">;

export type ComponentMapping = Awaited<ReturnType<typeof mapToApplicationData>>;

export type ApplicationName = (typeof APPLICATION_NAMES)[number];
