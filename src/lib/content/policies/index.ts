export type Policy = {
	slug: string;
	title: string;
	content: string;
};

// Load all markdown files in this folder at build time as raw strings
const modules = import.meta.glob('./*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

const policies: Policy[] = Object.entries(modules)
	.map(([path, content]) => {
		const slug = path.split('/').pop()!.replace(/\.md$/, '');
		const titleMatch = /^#\s+(.+)\s*$/m.exec(content);
		const title = (titleMatch ? titleMatch[1] : slug).trim();
		return { slug, title, content: content.trim() };
	})
	// Thai collation where available; fallback to default
	.sort((a, b) => a.title.localeCompare(b.title, 'th'));

export function getPolicies(): Policy[] {
	return policies;
}

export function getPolicyBySlug(slug: string): Policy | undefined {
	return policies.find((p) => p.slug === slug);
}
