import type { Context } from "@acme/types";

import { loader as webshopProductDetailPageLoader } from "@acme/webshop-product-detail-page";
import { loader as webshopProductListingPageLoader } from "@acme/webshop-product-listing-page";

import type { ApplicationEntry } from "../types.js";

export const mapToApplicationData = async (
	data: ApplicationEntry,
	ctx: Context,
) => {
	switch (data.name) {
		case "webshop-home-page":
			return {
				id: data.id,
				name: data.name,
				props: {},
			};
		case "webshop-product-detail-page":
			return {
				id: data.id,
				name: data.name,
				props: await webshopProductDetailPageLoader(ctx),
			};
		case "webshop-product-listing-page":
			return {
				id: data.id,
				name: data.name,
				props: await webshopProductListingPageLoader(ctx),
			};
	}
};
