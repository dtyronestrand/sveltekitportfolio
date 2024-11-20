
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myLanternTheme: CustomThemeConfig = {
    name: 'lanterns',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #2E038C 
		"--color-primary-50": "224 217 238", // #e0d9ee
		"--color-primary-100": "213 205 232", // #d5cde8
		"--color-primary-200": "203 192 226", // #cbc0e2
		"--color-primary-300": "171 154 209", // #ab9ad1
		"--color-primary-400": "109 79 175", // #6d4faf
		"--color-primary-500": "46 3 140", // #2E038C
		"--color-primary-600": "41 3 126", // #29037e
		"--color-primary-700": "35 2 105", // #230269
		"--color-primary-800": "28 2 84", // #1c0254
		"--color-primary-900": "23 1 69", // #170145
		// secondary | #0E2608 
		"--color-secondary-50": "219 222 218", // #dbdeda
		"--color-secondary-100": "207 212 206", // #cfd4ce
		"--color-secondary-200": "195 201 193", // #c3c9c1
		"--color-secondary-300": "159 168 156", // #9fa89c
		"--color-secondary-400": "86 103 82", // #566752
		"--color-secondary-500": "14 38 8", // #0E2608
		"--color-secondary-600": "13 34 7", // #0d2207
		"--color-secondary-700": "11 29 6", // #0b1d06
		"--color-secondary-800": "8 23 5", // #081705
		"--color-secondary-900": "7 19 4", // #071304
		// tertiary | #730C02 
		"--color-tertiary-50": "234 219 217", // #eadbd9
		"--color-tertiary-100": "227 206 204", // #e3cecc
		"--color-tertiary-200": "220 194 192", // #dcc2c0
		"--color-tertiary-300": "199 158 154", // #c79e9a
		"--color-tertiary-400": "157 85 78", // #9d554e
		"--color-tertiary-500": "115 12 2", // #730C02
		"--color-tertiary-600": "104 11 2", // #680b02
		"--color-tertiary-700": "86 9 2", // #560902
		"--color-tertiary-800": "69 7 1", // #450701
		"--color-tertiary-900": "56 6 1", // #380601
		// success | #4FA626 
		"--color-success-50": "229 242 222", // #e5f2de
		"--color-success-100": "220 237 212", // #dcedd4
		"--color-success-200": "211 233 201", // #d3e9c9
		"--color-success-300": "185 219 168", // #b9dba8
		"--color-success-400": "132 193 103", // #84c167
		"--color-success-500": "79 166 38", // #4FA626
		"--color-success-600": "71 149 34", // #479522
		"--color-success-700": "59 125 29", // #3b7d1d
		"--color-success-800": "47 100 23", // #2f6417
		"--color-success-900": "39 81 19", // #275113
		// warning | #F2E641 
		"--color-warning-50": "253 251 227", // #fdfbe3
		"--color-warning-100": "252 250 217", // #fcfad9
		"--color-warning-200": "252 249 208", // #fcf9d0
		"--color-warning-300": "250 245 179", // #faf5b3
		"--color-warning-400": "246 238 122", // #f6ee7a
		"--color-warning-500": "242 230 65", // #F2E641
		"--color-warning-600": "218 207 59", // #dacf3b
		"--color-warning-700": "182 173 49", // #b6ad31
		"--color-warning-800": "145 138 39", // #918a27
		"--color-warning-900": "119 113 32", // #777120
		// error | #F23535 
		"--color-error-50": "253 225 225", // #fde1e1
		"--color-error-100": "252 215 215", // #fcd7d7
		"--color-error-200": "252 205 205", // #fccdcd
		"--color-error-300": "250 174 174", // #faaeae
		"--color-error-400": "246 114 114", // #f67272
		"--color-error-500": "242 53 53", // #F23535
		"--color-error-600": "218 48 48", // #da3030
		"--color-error-700": "182 40 40", // #b62828
		"--color-error-800": "145 32 32", // #912020
		"--color-error-900": "119 26 26", // #771a1a
		// surface | #401201 
		"--color-surface-50": "226 219 217", // #e2dbd9
		"--color-surface-100": "217 208 204", // #d9d0cc
		"--color-surface-200": "207 196 192", // #cfc4c0
		"--color-surface-300": "179 160 153", // #b3a099
		"--color-surface-400": "121 89 77", // #79594d
		"--color-surface-500": "64 18 1", // #401201
		"--color-surface-600": "58 16 1", // #3a1001
		"--color-surface-700": "48 14 1", // #300e01
		"--color-surface-800": "38 11 1", // #260b01
		"--color-surface-900": "31 9 0", // #1f0900
		
	}
}