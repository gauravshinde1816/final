let fetchData = () => {
    let http = new XMLHttpRequest();
    http.open("GET", "db.json", true)
    http.send();
    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            console.log(JSON.parse(http.responseText))
            localStorage.setItem("users" ,  http.responseText)
            storedUser  = JSON.parse (localStorage.getItem("users"))
            displayData(storedUser)
        }
    }
}

fetchData()

const displayData = (data)=>{
    console.log(data.users)
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = ""
    data.users.map((user, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.college}</td>
         </tr> 
        `
    })
}


const btn = document.getElementById("btn")
btn.addEventListener("click" ,  ()=>{
    console.log("btn click")
    const name = document.getElementById("name").value
    const username = document.getElementById("username").value
    const college = document.getElementById("college").value


    let http = new XMLHttpRequest()
    http.open("POST"  ,  "http://localhost:5000/users" , true)
    http.setRequestHeader("Content-type", "application/json")
    http.send(JSON.stringify({name , username , college}))


    http.onreadystatechange = ()=>{
        if(http.status == 200 && http.readyState == 4){
            console.log(JSON.parse(http.responseText))
        }
    }

})