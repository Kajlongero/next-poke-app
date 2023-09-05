/**
 * @param string;
 * 
 * What does this function ?
 * 
 * This function transform from this format hello-new-world into this -> Hello new world
 */

export default function transformName(str: string): string {
  const splitted = str.split('-');
  let newStr = "";

  splitted.forEach((val, index) => {
    const actualString = splitted[index];
    newStr += `${actualString.charAt(0).toUpperCase()}${actualString.substring(1, actualString.length)} `;
  });

  return newStr;
}