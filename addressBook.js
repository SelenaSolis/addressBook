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
          // const bttn = document.createElement("button");
          const moreInfoDiv = document.createElement("div");
          const name = document.createTextNode(item.name.first + " " + item.name.last);
          const cellNum = document.createTextNode(item.cell);
          image.src = item.picture.thumbnail;
          image.onmouseover = function(){
            moreInfoDiv.style.display = "block";
            moreInfoDiv.style.width = "200px";
            moreInfoDiv.style.height = "200px";
            person.style.width = "200px";
            person.style.height = "200px";

          }
          moreInfoDiv.style.display = "none";
          moreInfoDiv.className = "info";
          moreInfoDiv.appendChild(cellNum);
          // bttn.innerHTML = "More info";
          // bttn.onclick = function() {
          //     // person.style.display = "none";
          //     moreInfoDiv.style.display = "block";
          // }
          
          person.appendChild(image);
          person.appendChild(name);
          // person.appendChild(bttn);
          person.appendChild(moreInfoDiv);
          user.append(person);
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
        const image = document.createElement("img");
        const name = document.createTextNode(item.name.first + " " + item.name.last);
        image.src = item.picture.thumbnail;
        person.appendChild(image);
        person.appendChild(name);
        user.append(person);
      })
    })

}