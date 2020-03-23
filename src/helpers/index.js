export /**
 *Returns an regex escaped string
 * @param {String} str
 * @returns {String}
 */
const escapeRegexCharacters = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
