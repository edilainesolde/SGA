export function formatDateTime(value) {
	if (value === null || value === undefined || value === '') return 'Data não registrada';

	const isDateOnly = typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
	const date = new Date(isDateOnly ? `${value}T12:00:00Z` : value);
	if (Number.isNaN(date.getTime())) return 'Data não registrada';

	const options = isDateOnly
		? { dateStyle: 'medium' }
		: { dateStyle: 'medium', timeStyle: 'short' };

	return new Intl.DateTimeFormat('pt-BR', {
		...options,
		timeZone: 'America/Sao_Paulo',
	}).format(date);
}
