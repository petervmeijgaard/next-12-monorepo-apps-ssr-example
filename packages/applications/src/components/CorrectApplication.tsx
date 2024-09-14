import { HomePage } from "@acme/webshop-home-page";
import { ProductDetailPage } from "@acme/webshop-product-detail-page";
import { ProductListingPage } from "@acme/webshop-product-listing-page";

import type { ComponentMapping } from "../types.js";

export function CorrectApplication(item: ComponentMapping) {
	switch (item.name) {
		case "webshop-product-detail-page":
			return <ProductDetailPage {...item.props} foo="bar" />;
		case "webshop-product-listing-page":
			return <ProductListingPage {...item.props} />;
		case "webshop-home-page":
			return <HomePage {...item.props} hello="world" />;
	}
}
