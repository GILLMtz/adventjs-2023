export function findFirstRepeated(gifts) {
  let dic = {};
  for (let id of gifts) {
    if(id in dic) return id;
    else dic[id] = id 
  }
  return -1;
}