
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "var(--color-warning-50)",
		"--on-success": "0 0 0",
		"--on-warning": "var(--color-primary-800)",
		"--on-error": "255 255 255",
		"--on-surface": "var(--color-secondary-50)",
		// =~= Theme Colors  =~=
		// primary | #044485 
		"--color-primary-50": "217 227 237", // #d9e3ed
		"--color-primary-100": "205 218 231", // #cddae7
		"--color-primary-200": "192 208 225", // #c0d0e1
		"--color-primary-300": "155 180 206", // #9bb4ce
		"--color-primary-400": "79 124 170", // #4f7caa
		"--color-primary-500": "4 68 133", // #044485
		"--color-primary-600": "4 61 120", // #043d78
		"--color-primary-700": "3 51 100", // #033364
		"--color-primary-800": "2 41 80", // #022950
		"--color-primary-900": "2 33 65", // #022141
		// secondary | #91480A 
		"--color-secondary-50": "239 228 218", // #efe4da
		"--color-secondary-100": "233 218 206", // #e9dace
		"--color-secondary-200": "228 209 194", // #e4d1c2
		"--color-secondary-300": "211 182 157", // #d3b69d
		"--color-secondary-400": "178 127 84", // #b27f54
		"--color-secondary-500": "145 72 10", // #91480A
		"--color-secondary-600": "131 65 9", // #834109
		"--color-secondary-700": "109 54 8", // #6d3608
		"--color-secondary-800": "87 43 6", // #572b06
		"--color-secondary-900": "71 35 5", // #472305
		// tertiary | #006F74 
		"--color-tertiary-50": "217 233 234", // #d9e9ea
		"--color-tertiary-100": "204 226 227", // #cce2e3
		"--color-tertiary-200": "191 219 220", // #bfdbdc
		"--color-tertiary-300": "153 197 199", // #99c5c7
		"--color-tertiary-400": "77 154 158", // #4d9a9e
		"--color-tertiary-500": "0 111 116", // #006F74
		"--color-tertiary-600": "0 100 104", // #006468
		"--color-tertiary-700": "0 83 87", // #005357
		"--color-tertiary-800": "0 67 70", // #004346
		"--color-tertiary-900": "0 54 57", // #003639
		// success | #008555 
		"--color-success-50": "217 237 230", // #d9ede6
		"--color-success-100": "204 231 221", // #cce7dd
		"--color-success-200": "191 225 213", // #bfe1d5
		"--color-success-300": "153 206 187", // #99cebb
		"--color-success-400": "77 170 136", // #4daa88
		"--color-success-500": "0 133 85", // #008555
		"--color-success-600": "0 120 77", // #00784d
		"--color-success-700": "0 100 64", // #006440
		"--color-success-800": "0 80 51", // #005033
		"--color-success-900": "0 65 42", // #00412a
		// warning | #F9F871 
		"--color-warning-50": "254 254 234", // #fefeea
		"--color-warning-100": "254 254 227", // #fefee3
		"--color-warning-200": "254 253 220", // #fefddc
		"--color-warning-300": "253 252 198", // #fdfcc6
		"--color-warning-400": "251 250 156", // #fbfa9c
		"--color-warning-500": "249 248 113", // #F9F871
		"--color-warning-600": "224 223 102", // #e0df66
		"--color-warning-700": "187 186 85", // #bbba55
		"--color-warning-800": "149 149 68", // #959544
		"--color-warning-900": "122 122 55", // #7a7a37
		// error | #C84061 
		"--color-error-50": "247 226 231", // #f7e2e7
		"--color-error-100": "244 217 223", // #f4d9df
		"--color-error-200": "241 207 216", // #f1cfd8
		"--color-error-300": "233 179 192", // #e9b3c0
		"--color-error-400": "217 121 144", // #d97990
		"--color-error-500": "200 64 97", // #C84061
		"--color-error-600": "180 58 87", // #b43a57
		"--color-error-700": "150 48 73", // #963049
		"--color-error-800": "120 38 58", // #78263a
		"--color-error-900": "98 31 48", // #621f30
		// surface | #003270 
		"--color-surface-50": "217 224 234", // #d9e0ea
		"--color-surface-100": "204 214 226", // #ccd6e2
		"--color-surface-200": "191 204 219", // #bfccdb
		"--color-surface-300": "153 173 198", // #99adc6
		"--color-surface-400": "77 112 155", // #4d709b
		"--color-surface-500": "0 50 112", // #003270
		"--color-surface-600": "0 45 101", // #002d65
		"--color-surface-700": "0 38 84", // #002654
		"--color-surface-800": "0 30 67", // #001e43
		"--color-surface-900": "0 25 55", // #001937
		
	}
}