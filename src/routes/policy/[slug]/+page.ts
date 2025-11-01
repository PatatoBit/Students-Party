import { error } from '@sveltejs/kit';
import { getPolicyBySlug } from '$lib/content/policies';

export const load = ({ params }: { params: { slug: string } }) => {
	const policy = getPolicyBySlug(params.slug);
	if (!policy) {
		throw error(404, 'Policy not found');
	}
	return { policy };
};
