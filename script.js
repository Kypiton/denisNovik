const flexContainer = document.getElementById("flex__container");
const btns = flexContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
    let element = btns[i];
    element.addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    let change = current[0];
    change.className = change.className.replace(" active", "");
    this.className += " active";
  });
}
    