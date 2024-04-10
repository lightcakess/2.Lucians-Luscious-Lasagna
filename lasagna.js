const preparation_minutes_per_layer = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  console.log(EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}

export function preparationTimeInMinutes(numberOfLayers) {
  console.log(numberOfLayers * preparation_minutes_per_layer);
  return numberOfLayers * preparation_minutes_per_layer
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  console.log(numberOfLayers * preparation_minutes_per_layer + actualMinutesInOven);
  return numberOfLayers * preparation_minutes_per_layer + actualMinutesInOven
}

remainingMinutesInOven(30);
preparationTimeInMinutes(2);
totalTimeInMinutes(3, 20);