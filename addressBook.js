const newArr = [];
(function(){
  getMultiple();
})()


function get(){
    fetch("https://randomuser.me/api/")
      .then( response => response.json())
      .then( data => {
        document.getElementById("personList").innerHTML = "";
        newArr.push(data.results["0"]);
        console.log(newArr);
        newArr.map(item => {
          const user = document.getElementById("personList");
          const person = document.createElement("div");
          person.className = "entry";
          const image = document.createElement("img");
          const moreInfoDiv = document.createElement("div");
          const phoneDiv = document.createElement("div");
          const dobDiv = document.createElement("div");
          const addressDiv = document.createElement("div");
          const nameP = document.createElement("p");
          const name = document.createTextNode(item.name.first + " " + item.name.last);
          const cellNum = document.createTextNode("cell phone: " + item.cell);
          const dob = document.createTextNode("birthday: " + item.dob.date.slice(5, 7) + "-" + item.dob.date.slice(8, 10) + "-" + item.dob.date.slice(0, 4));
          const address = document.createTextNode("address: " + item.location.street + " " + item.location.city + ", " + item.location.state + " " + item.location.postcode);
          image.src = item.picture.thumbnail;
          
          moreInfoDiv.style.display = "none";
          moreInfoDiv.className = "info";
          nameP.appendChild(name);
          phoneDiv.appendChild(cellNum);
          dobDiv.appendChild(dob);
          addressDiv.appendChild(address);
          moreInfoDiv.appendChild(phoneDiv);
          moreInfoDiv.appendChild(dobDiv);
          moreInfoDiv.appendChild(addressDiv)
          person.appendChild(image);
          person.appendChild(nameP);
          person.appendChild(moreInfoDiv);
          user.append(person);

          person.onmouseover = function(){
            moreInfoDiv.style.display = "block";
            moreInfoDiv.style.width = "300px";
            moreInfoDiv.style.height = "200px";
            person.style.width = "300px";
            person.style.height = "200px";
            nameP.style.fontSize = "30px";
          }
          person.onmouseout = function(){
            moreInfoDiv.style.display = "none";
            person.style.width = "150px";
            person.style.height = "150px";
            nameP.style.fontSize = "18px";
          }
        })
      })
}

function getMultiple(){
  fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data =>{
      document.getElementById("personList").innerHTML = "";
      let dataArr = data.results;
      dataArr.map(x =>newArr.push(x));
      console.log(newArr);
      newArr.map(item => {
        const user = document.getElementById("personList");
        const person = document.createElement("div");
        person.className = "entry";
        const image = document.createElement("img");
        const moreInfoDiv = document.createElement("div");
        const phoneDiv = document.createElement("div");
        const dobDiv = document.createElement("div");
        const addressDiv = document.createElement("div");
        const nameP = document.createElement("p");
        const name = document.createTextNode(item.name.first + " " + item.name.last);
        const cellNum = document.createTextNode("CELL PHONE: " + item.cell);
        const dob = document.createTextNode("BIRTHDAY: " + item.dob.date.slice(5, 7) + "-" + item.dob.date.slice(8, 10) + "-" + item.dob.date.slice(0, 4));
        const address = document.createTextNode("ADDRESS: " + item.location.street + " " + item.location.city + ", " + item.location.state + " " + item.location.postcode);
        image.src = item.picture.thumbnail;
        
        moreInfoDiv.style.display = "none";
        moreInfoDiv.className = "info";
        nameP.appendChild(name);
        phoneDiv.appendChild(cellNum);
        dobDiv.appendChild(dob);
        addressDiv.appendChild(address);
        moreInfoDiv.appendChild(phoneDiv);
        moreInfoDiv.appendChild(dobDiv);
        moreInfoDiv.appendChild(addressDiv)
        person.appendChild(image);
        person.appendChild(nameP);
        person.appendChild(moreInfoDiv);
        user.append(person);

        person.onmouseover = function(){
          moreInfoDiv.style.display = "block";
          moreInfoDiv.style.width = "300px";
          moreInfoDiv.style.height = "200px";
          person.style.width = "300px";
          person.style.height = "200px";
          nameP.style.fontSize = "30px";
        }
        person.onmouseout = function(){
          moreInfoDiv.style.display = "none";
          person.style.width = "150px";
          person.style.height = "150px";
          nameP.style.fontSize = "18px";
        }
      })
    })

}