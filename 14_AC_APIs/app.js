let btn = document.querySelector("button");
let p = document.querySelector("p");

btn.addEventListener("click", async () => {
  let fact = await getFacts();
  p.innerText = fact;
});

let url = "https://catfact.ninja/fact";
async function getFacts() {
  try {
    let res = await axios.get(url);
    //console.log(res.data.fact)
    return res.data.fact;
  } catch (e) {
    console.log("ERROR:-", e);
    return "No fact found";
  }
}
