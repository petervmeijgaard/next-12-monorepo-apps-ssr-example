import { ApplicationProvider, mapToApplicationData } from "@acme/applications";
import { CmsComponent, isNamedApplicationEntry } from "@acme/cms";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import { CMS_RESPONSE_MOCK } from "../mocks";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const cmsResponse = CMS_RESPONSE_MOCK;

	const applicationDataPromises = cmsResponse
		.filter(isNamedApplicationEntry)
		.map((entry) => mapToApplicationData(entry, ctx));

	const applicationData = await Promise.all(applicationDataPromises);

	return {
		props: {
			applicationData,
			cmsResponse,
		},
	};
};

export default function Home({
	applicationData,
	cmsResponse,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<ApplicationProvider applicationData={applicationData}>
			{cmsResponse.map((entry) => (
				<CmsComponent {...entry} key={entry.id} />
			))}
		</ApplicationProvider>
	);
}
