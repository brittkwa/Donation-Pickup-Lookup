let zipcode = 0;
let zipForm = document.querySelector("form");
zipForm.addEventListener("submit", getZip);
let websitesArray = [
  ["Salvation Army", "https://satruck.org/Donate/choose?zip="],
  [
    "Pick Up Please",
    "https://pickupplease.org/r/#/schedule?xEP=01&xA=10001&xZ=",
  ],
];

function getZip(event) {
  event.preventDefault();

  let zipcode = document.querySelector("#zip").value;

  console.log(zipcode);
  processZip(zipcode);
}

function processZip(zipcode) {
  let link = addZiptoLink(zipcode);
  webScraper(link);
}

function addZiptoLink(zipcode) {
  for (let i = 0; i < websitesArray.length; i++) {
    let link = websitesArray[i][1] + zipcode;
    return link;
  }
}

function webScraper(link) {
  axios.get(link).then();
}
