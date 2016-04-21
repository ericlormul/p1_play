export class CampService {
	camps = [
		'Coding',
		'Art',
		'Criminal Investigation',
		'Tourism',
		'Cilantro'
	];

	search(query: string): string[] {
		return this.camps.filter(c => {
			return  c.toLowerCase().startsWith(query.toLowerCase());
		});
	}
}
