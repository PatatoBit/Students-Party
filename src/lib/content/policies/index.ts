export type Policy = {
	slug: string;
	title: string;
	content: string;
	tags: string[];
};

function parseFrontmatter(md: string): { body: string; tags: string[] } {
	// Very small frontmatter parser supporting only `tags` in either
	// array form (tags: [a, b]) or list form:
	// tags:\n - a\n - b
	if (!md.startsWith('---')) return { body: md, tags: [] };

	const end = md.indexOf('\n---');
	if (end === -1) return { body: md, tags: [] };

	const fm = md.slice(3, end).trim();
	const body = md.slice(end + 4).replace(/^\s*\n/, '');

	let tags: string[] = [];

	// Try array syntax: tags: [a, b, "c d"]
	const arrayMatch = /(^|\n)tags:\s*\[(.*?)\]/s.exec(fm);
	if (arrayMatch && arrayMatch[2] !== undefined) {
		tags = arrayMatch[2]
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean)
			.map((s) => s.replace(/^['"]|['"]$/g, ''));
	} else {
		// Try list syntax
		const listMatch = /(^|\n)tags:\s*\n([\s\S]*)$/m.exec(fm);
		if (listMatch) {
			const lines = listMatch[2]
				.split('\n')
				.map((l) => l.trim())
				.filter((l) => l.startsWith('- '))
				.map((l) => l.replace(/^\-\s+/, ''))
				.map((s) => s.replace(/^['"]|['"]$/g, ''))
				.filter(Boolean);
			// Stop at first non-list line
			const stopIndex = lines.findIndex((l) => !l);
			tags = stopIndex === -1 ? lines : lines.slice(0, stopIndex);
		}
	}

	// Deduplicate and sort (Thai collation if available)
	tags = Array.from(new Set(tags)).sort((a, b) => a.localeCompare(b, 'th'));

	return { body, tags };
}

// Load all markdown files in this folder at build time as raw strings
const modules = import.meta.glob('./*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

const policies: Policy[] = Object.entries(modules)
	.map(([path, raw]) => {
		const slug = path.split('/').pop()!.replace(/\.md$/, '');
		const { body, tags } = parseFrontmatter(raw);
		const titleMatch = /^#\s+(.+)\s*$/m.exec(body);
		const title = (titleMatch ? titleMatch[1] : slug).trim();
		return { slug, title, content: body.trim(), tags };
	})
	// Thai collation where available; fallback to default
	.sort((a, b) => a.title.localeCompare(b.title, 'th'));

export function getPolicies(): Policy[] {
	return policies;
}

export function getPolicyBySlug(slug: string): Policy | undefined {
	return policies.find((p) => p.slug === slug);
}
