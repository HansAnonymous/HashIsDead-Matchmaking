import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
	theme: {
		extend: {
			fontSize: {
				xxs: '0.5rem'
			},
			colors: {
				'flannel-red': '#990000',
				'olive-green': '#BAB86C',
			}
		}
	}
}