const visitors = [];

function timeout() {
  const list = document.querySelector("ul");

  if (visitors.length > 20) {
    list.removeChild(list.firstChild);
    visitors.pop();
  }

  setTimeout(function () {
    const li = document.createElement("li");
    function randomNumber(max) {
      return Math.floor(Math.random() * max);
    }
    const height = randomNumber(100);
    li.style.setProperty("--height", height);
    list.appendChild(li);
    visitors.push(height);
    console.log(visitors);
    timeout();
  }, 1000);
}

timeout();
