import jalaali from 'jalaali-js'

/**
 * Convert Persian numerals to Western numerals
 */
export const convertPersianDigits = (str: string): string => {
	const regex = /[۰-۹]/g
	return str.replace(regex, (match) => String.fromCharCode(match.charCodeAt(0) - 1728))
}

/**
 * Convert Persian date to Gregorian format
 */
export const convertPersianDateToGregorian = (persianDate: string): string => {
	if (!persianDate) return ''

	try {
		const westernDate = convertPersianDigits(persianDate)
		const [jy, jm, jd] = westernDate.split('-').map(Number)
		const gregorian = jalaali.toGregorian(jy, jm, jd)

		return `${gregorian.gy}-${String(gregorian.gm).padStart(2, '0')}-${String(gregorian.gd).padStart(2, '0')}`
	} catch (error) {
		console.error('Error converting Persian date to Gregorian:', error)
		return persianDate
	}
}
