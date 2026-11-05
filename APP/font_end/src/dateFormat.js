export function formatDateTime(value) {
	if (value === null || value === undefined || value === '') return 'Data não registrada';

	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return 'Data não registrada';

	return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}
