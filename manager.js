let list = [
    "Retro C02", "Retro C10", "day Ham 2 C02"
]
// hien thi danh sach
function showAll(){
    getLocalStorage();
    let content="";
    for (let i = 0; i < list.length; i++) {
        // content += `<tr>
        //     <th>${list[i]}</th>
        //     </tr>`;
        // content += "<tr><th>"+list[i]+"</th></tr>";
        content += "<tr><td>"+list[i]+"</td><td><button onclick="+"deleteTask("+i+")"+">Xoa</button><button onclick="+"edit("+i+")"+">Sua</button></td></tr>";
    }
    document.getElementById("list").innerHTML = content;
    // setLocalStorage();
}
//tao moi
function createNewTask(){
    //lay du lieu
    let newTask = document.getElementById("newTask").value;
    //them moi vao mang
    list.push(newTask);
    setLocalStorage();
    // hien thi lai ra bang
    showAll();
}
function deleteTask(index){
    //xoa trong mang
    list.splice(index, 1);
    setLocalStorage();
    //hien thi lai du lieu
    showAll();

}
function edit(index){
    // lay gia tri moi
    let newValue = prompt("Moi nhap gia tri moi", list[index]);
    //gan lai gia tri
    list[index] = newValue;
    setLocalStorage();
    //hien thi lai danh sach
    showAll();
}

function setLocalStorage(){
    localStorage.setItem("list", list);
}
function getLocalStorage() {
    list = localStorage.getItem("list").split(",");
}
