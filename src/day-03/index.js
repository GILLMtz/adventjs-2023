/* 
  case : Add step
  ori[i]!== mod[i] && ori[i] === mod[i+1]
  return mod[i]

   01234
  'xxxx'
  'xxoxx'

  expect => 'o'

case :Delete step
ori[i]!== mod[i] && ori[i+1] === mod[i]
return ori[i]

 0123456
'stepfor'
'stepor'

expect => 'f'
 */
export function findNaughtyStep(original, modified) {
  for (let index = 0; index < [...original].length; index++) {
    if (original[index] !== modified[index])
      if (original[index] === modified[index + 1]) return modified[index]
      else return original[index];
  }
  if (modified.length > original.length)
    return modified[modified.length - 1];
  return '';
}
