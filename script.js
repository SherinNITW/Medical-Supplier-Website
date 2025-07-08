const items = document.querySelectorAll(".imgs");

for (const item of items) {
  setInterval(() => {
    item.scrollLeft += 1; // scroll 1 pixel every 30ms
    if (item.scrollLeft + item.clientWidth >= item.scrollWidth) {
      item.scrollLeft = 0; // go back to start
    }
  }, 30); // scroll every 30 milliseconds
}
