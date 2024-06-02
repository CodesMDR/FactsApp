const btn = document.querySelector(".btn");
const results = document.querySelector(".results");
const container = document.querySelector(".container");

let newItem = () => {
  setTimeout(() => {
    fetch("https://api.api-ninjas.com/v1/facts", {
      headers: { "X-Api-Key": "xIEFntgxDtuFjzfICe1x7g==z6wQuXIRLKePetzG" },
    })
      .then((res) => res.json())
      .then((data) => {
        results.innerHTML = data[0].fact;
      });
  }, 500);
};

btn.addEventListener("click", () => {
  results.innerHTML = "Loading a new fact ...";
  container.style.height = "350px";
  container.style.width = "600px";
  newItem();
});
