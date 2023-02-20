import { GetStaticProps } from 'next';
//import Link from 'next/link';
//import Card from '@/components/Card/Card';
import Page from '@/components/Page/Page';
import getApolloClient from '@/graphql/apollo';
import {
	AllContentTypesDocument,
	AllContentTypesQuery,
	ContentTypeFieldsFragment,
} from '@/graphql/generated';

type Props = {
	contentTypes: ContentTypeFieldsFragment[],
};

export default function Home( props: Props ) {
	return (
		<Page title="This is Title">
			<p>Quick brown fox jumps over the lazy dog</p>
		</Page>
	);
}

export const getStaticProps: GetStaticProps<Props> = async ( context ) => {
	const queryOptions = {
		query: AllContentTypesDocument,
	};

	const { data } = await getApolloClient( context ).query<AllContentTypesQuery>( queryOptions );

	const contentTypes = data.contentTypes.nodes || [];

	return {
		props: {
			contentTypes: contentTypes.filter( contentType => contentType.contentNodes.nodes.length ),
		},
	};
};
