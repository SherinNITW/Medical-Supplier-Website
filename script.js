const products = document.querySelectorAll(".imgs");
for(const item of products){
  item.addEventListener("wheel",(e)=>{
    e.preventDefault();
    item.scrollLeft += e.deltaY;
  });
}