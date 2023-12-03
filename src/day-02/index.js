export function manufacture(gifts, materials) {
  materials = materials.toLowerCase();
  return gifts.filter((gift) => ![...gift.toLowerCase()].some((c) => !materials.includes(c)));
}
