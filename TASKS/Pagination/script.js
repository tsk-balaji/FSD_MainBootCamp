let jsonDataInArray = [];

fetch(
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
)
  .then((response) => response.json())
  .then((data) => {
    jsonDataInArray.push(data);
  });

let current_page = 1;
let current_set = 1;

let list = document.querySelectorAll(".link"); //Selecting all elements with class "link"

for (let item of list) {
  item.addEventListener(
    //adding onclick event listener
    "click",
    function (e) {
      for (l of list) {
        //removes active attribute to all the elements
        l.classList.remove("active");
      }
      e.target.classList.add("active"); //adds active attribute to the clicked element
      current_page = e.target.value;
      let dataDiv = document.querySelector(".data");
      dataDiv.innerHTML = "";
      let namePara = document.createElement("p");
      namePara.setAttribute("class", "name");
      let emailPara = document.createElement("p");
      emailPara.setAttribute("class", "email");
      let idPara = document.createElement("p");
      idPara.setAttribute("class", "id");
      idPara.innerHTML = `Id : ${jsonDataInArray[0][current_page - 1].id}`;
      namePara.innerHTML = `Name : ${
        jsonDataInArray[0][current_page - 1].name
      }`;
      emailPara.innerHTML = `Email : ${
        jsonDataInArray[0][current_page - 1].email
      }`;

      dataDiv.appendChild(idPara);
      dataDiv.appendChild(namePara);
      dataDiv.appendChild(emailPara);

      document.body.replaceChild(dataDiv);
    }
  );
}

function backBtn() {
  if (current_page > 1) {
    for (l of list) {
      l.classList.remove("active");
    }
    current_page--;
    current_set--;
    list[current_page - 1].classList.add("active");
  }
}

function nextBtn() {
  if (current_page < 100) {
    for (l of list) {
      l.classList.remove("active");
    }
    current_page++;
    current_set++;
    list[current_page - 1].classList.add("active");
  }
}

function prevSet() {
  const computedStyle2 = window.getComputedStyle(list[0]);
  const displayValue2 = computedStyle2.getPropertyValue("display");
  if (displayValue2 !== "inline-block") {
    if (current_page > 0) {
      for (l of list) {
        l.classList.remove("active");
      }
      current_set--;
      list[current_page - 1].classList.add("active");
      renderPage(current_set);
    }
  }
}

function nextSet() {
  const computedStyle1 = window.getComputedStyle(list[99]);
  const displayValue1 = computedStyle1.getPropertyValue("display");
  if (displayValue1 !== "inline-block") {
    if (current_page < 99) {
      for (l of list) {
        l.classList.remove("active");
      }
      current_set++;
      list[current_page - 1].classList.add("active");
      renderPage(current_set);
    }
  }
}
const itemsPerPage = 10; // Number of items to display per page

function renderPage(current_set) {
  const startIndex = (current_set - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "inline-block"; // Show the element
    } else {
      list[i].style.display = "none"; // Hide the element
    }
  }
}

renderPage(current_set);

let nextSetObj = document.getElementsByClassName("btn4");
let prevSetObj = document.getElementsByClassName("btn3");

nextSetObj.addEventListener("click", () => {
  if (window.getComputedSyle(list[100].display != "inline-block")) {
    nextSet();
  }
});

prevSetObj.addEventListener("click", () => {
  if (window.getComputedSyle(list[1].display != "inline-block")) {
    prevSet();
  }
});
