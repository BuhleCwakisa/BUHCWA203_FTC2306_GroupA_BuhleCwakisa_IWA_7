const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
// owed = `${parseFloat(owed)} ` 

const leoSliced = leoSurname.slice(0, 8)
console.log(leoSliced)
const leo = `${leoName} ${leoSurname} (Owed : R ${-parseFloat(leoBalance).toFixed(2)})`;
const sarahSliced = sarahName.slice(0, 5)
console.log(sarahSliced)
const sarah = `${sarahSliced} ${sarahSurname} (Owed : R ${-parseFloat(sarahBalance).toFixed(2)})`;
const total = `Total amount owed: R ${Math.abs(owed).toFixed(2)}`;
const result = ` \n${leo}\n${sarah}\n\n${divider}\n  ${total} \n${divider} \n `;

console.log(result);