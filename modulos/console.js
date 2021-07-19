
const tabla = [
  { a : 1 , b : 'uno'},
  { a : 2 , b: 'dos'},
  { a : 3 , b: 'tres'}
]
console.table(tabla)
console.log('\n')
console.log('log normal')
console.info('log info')
console.error('log error')
console.log('\n')


console.group('lista')
console.log('1')
console.log('2')
console.group('sublista')
console.log('2.1')
console.log('2.2')
console.groupEnd('sublista')
console.log('3')
console.log('4')
console.groupEnd('lista')