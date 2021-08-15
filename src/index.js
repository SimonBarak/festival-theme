import { buildToggleMenu } from "./js/fullscreen-menu.js";

import "./index.scss";

buildToggleMenu();

const getMinutes = (int) => {
  if (int === 0) return 0;
  const y = 6 / int;
  const z = 1 / y;
  return z;
};

const getPosition = (int) => {
  const startPosition = int - 9.5;
  return startPosition * 2 * 8;
};

const getDecimal = (time) => {
  const split = time.split(".");
  const numbers = split.map((x) => parseInt(x));
  const minutesToDeci = getMinutes(numbers[1]);
  const timeNumber = numbers[0] + minutesToDeci;
  return timeNumber;
};

const getSart = (slot, start) => {
  const decimal = getDecimal(start);
  const position = getPosition(decimal);

  slot.style.left = position + "rem";
};

const getLenght = (start, end) => {
  const count = getDecimal(end) - getDecimal(start);
  const inRem = count * 2 * 8;
  const withBuffer = inRem - 0.5;
  return withBuffer;
};

const handelSlots = (startData, endData, slotEls) => {
  slotEls.forEach((slot, index) => {
    const fridayStart = slot.getAttribute(startData);
    const fridayEnd = slot.getAttribute(endData);

    getSart(slot, fridayStart);

    const lenght = getLenght(fridayStart, fridayEnd);
    slot.style.width = lenght + "rem";
    slot.style.top = "-" + index * 4.5 + "rem";

    // slot.style.background(`rgb(66, ${Math.floor(Math.random() * 255)}, 225)`);
  });
};

const rowFridayEls = Array.from(
  document.getElementsByClassName("timeline-row-friday")
);

const rowSaturdayEls = Array.from(
  document.getElementsByClassName("timeline-row-saturday")
);

if (rowFridayEls.length > 0) {
  rowFridayEls.forEach((row) => {
    const slotEls = Array.from(row.getElementsByClassName("slot"));
    if (slotEls.length > 0)
      handelSlots("data-friday-start", "data-friday-end", slotEls);
  });

  rowSaturdayEls.forEach((row) => {
    const slotEls = Array.from(row.getElementsByClassName("slot"));
    if (slotEls.length > 0)
      handelSlots("data-saturday-start", "data-saturday-end", slotEls);
  });
}
