//input
const coconutPricePerKg = document.getElementById("coconut-price");
const logisticePrice = document.getElementById("logistics-price");
const profitPercentage = document.getElementById("profit");
const usdRate = document.getElementById("usd-inr");
const aedRate = document.getElementById("aed-inr");

//display

const pricePerKginr = document.getElementById("perice-per-kg-inr");
const pricePerBaginr = document.getElementById("perice-per-bag-inr");
const pricePerBagusd = document.getElementById("perice-per-bag-usd");
const pricePerBagAed = document.getElementById("perice-per-bag-aed");

//variables
let c = 0;
let log = 0;
let p = 0;
let aed = 0;
let usd = 0;

usdRate.addEventListener("input", function (e) {
  usd = e.target.value;
  update(c, log, p, usd, aed);
});

aedRate.addEventListener("input", function (e) {
  aed = e.target.value;
  update(c, log, p, usd, aed);
});

coconutPricePerKg.addEventListener("input", function (e) {
  c = e.target.value;
  update(c, log, p, usd, aed);
});

logisticePrice.addEventListener("input", function (e) {
  log = e.target.value;
  update(c, log, p, usd, aed);
});

profitPercentage.addEventListener("input", function (e) {
  p = e.target.value;
  update(c, log, p, usd, aed);
});

function update() {
  p = parseInt(p);
  c = parseInt(c);
  log = parseInt(log);
//   usd = parseInt(usd);
//   aed = parseInt(aed);

  console.log(usd , aed)

  let priceperkginr = (c + log / 29000) * ((p + 100) / 100);
  let priceperbaginr = priceperkginr * 13.2;
  let usdinr = priceperbaginr / usd;
  let aedinr = priceperbaginr / aed;


  pricePerKginr.innerHTML = priceperkginr;
  pricePerBaginr.innerHTML = priceperbaginr;
  pricePerBagusd.innerHTML = usdinr;
  pricePerBagAed.innerHTML = aedinr;
}
