let waterConsumption = Number(prompt("How much water did you use in litters?"));
// Fixed bill for consumption up to 6kl
const level1 = 6 * 15.73;
// Fixed bill for consumption up to 10.5kl
const level2 = ((10500 - 6000) / 1000) * 22.38 + level1;
// Fixed bill for consumption up to 35kl
const level3 = ((35000 - 10500) / 1000) * 31.77 + level1 + level2;


if (waterConsumption >= 35000) {
  waterConsumption = Number(prompt("How much water did you use in litters?"));
}
if (waterConsumption <= 6000) {
  console.log(`Your bill is: R${(waterConsumption / 1000) * 15.73}`);
} else if (waterConsumption > 6000 && waterConsumption <= 10500) {
  const over6000 = ((waterConsumption - 6000) / 1000) * 22.38;
  console.log(`Your bill is R${over6000 + level1}`);
} else if (waterConsumption > 10500 && waterConsumption <= 35000) {
  const over10500 = ((waterConsumption - 10500) / 1000) * 31.77;
  console.log(`Your bill is: R ${over10500 + level2}`);
} else if (waterConsumption > 35000) {
  const over35000 = ((waterConsumption - 35000) / 1000) * 69.76;
  console.log(`Your bill is: ${over35000 + level3}`);
}
