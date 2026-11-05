import { formatDateTime } from './dateFormat';

describe('formatDateTime', () => {
	it('shows a useful fallback when the request has no date', () => {
		expect(formatDateTime(null)).toBe('Data não registrada');
		expect(formatDateTime('')).toBe('Data não registrada');
	});

	it('formats a valid timestamp without falling back to the Unix epoch', () => {
		const formatted = formatDateTime('2026-11-04T20:29:00-03:00');

		expect(formatted).not.toBe('Data não registrada');
		expect(formatted).not.toContain('1969');
		expect(formatted).toContain('2026');
	});
});
