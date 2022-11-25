const form = document.getElementById("form");
const nom = document.getElementById("nom");
const marque = document.getElementById("marque");
const prix = document.getElementById("prix");
const date = document.getElementById("date");
const type = document.getElementById("type");
const promotion = document.getElementsByName("promotion");
var btn = document.getElementById("ajouter");
let count = 0;
let idproduct;
btn.addEventListener("click", checkproduct);
function checkinputs() {
  if (nom.value === "") {
    setError(nom, "champ obligatoire");
    nom.focus();
    return false;
  } else {
    setsucces(nom);
  }
  if (marque.value === "") {
    setError(marque, "champ obligatoire");
    marque.focus();
    return false;
  } else {
    setsucces(marque);
  }
  if (prix.value === "") {
    setError(prix, "champ obligatoire");
    prix.focus();
    return false;
  } else {
    setsucces(prix);
  }
  if (date.value === "") {
    setError(date, "champ obligatoire");
    date.focus();
    return false;
  } else {
    setsucces(date);
  }
  if (type.selectedIndex < 1) {
    setError(type, "champ obligatoire");
    date.focus();
    return false;
  } else {
    setsucces(type);
  }
  for (let i = 0; i < promotion.length; i++) {
    if (promotion[i].checked) {
      setsucces(promotion[i]);
      break;
    } else {
      setError(promotion[i], "champ obligatoire");
    }
  }
}
function isFormValid() {
  const inputContainers = form.querySelectorAll(".form-control");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("form-control-error")) {
      result = false;
    }
  });
  return result;
}
function checkproduct() {
  if (btn.value === "AJOUTER") {
    checkinputs();
    if (isFormValid() == true) {
      count++;
      add();
    } else {
      return true;
    }
    } else if (btn.value === "Modifier") {
    checkinputs();
    if (isFormValid() == true) {
      updatein();
    } else {
      return true;
    }
  }
}
function setError(input, message) {
  var formcontrol = input.closest(".form-control");
  var small = formcontrol.querySelector("small");
  if (formcontrol.classList.contains("form-control-succes")) {
    formcontrol.classList.remove("form-control-succes");
  }
  formcontrol.classList.add("form-control-error");
  small.textContent = message;
}
function setsucces(input) {
  var formcontrol = input.closest(".form-control");
  var small = formcontrol.querySelector("small");
  if (formcontrol.classList.contains("form-control-error")) {
    formcontrol.classList.remove("form-control-error");
  }
  formcontrol.classList.add("form-control-succes");
  small.textContent = " ";
}
function getpromo(listpromo) {
  for (let i = 0; i < listpromo.length; i++) {
    if (listpromo[i].checked) {
      return listpromo[i].value;
    }
  }
}

function productDelete(product) {
  product.closest("tr").remove();
}
function productUpdate(product) {
  var row = product.closest("tr");
  var cols = row.querySelectorAll("td");
  nom.value = cols[0].innerHTML;
  marque.value = cols[1].innerHTML;
  prix.value = cols[2].innerHTML;
  date.value = cols[3].innerHTML;
  type.value = cols[4].innerHTML;
  for (let i = 0; i < promotion.length; i++) {
    if (promotion[i].value == cols[5].innerHTML) {
      console.log(promotion[i].value);
      promotion[i].checked = true;
    }
  }
  btn.value = "Modifier";
  idproduct = row;
}
function updatein() {
  console.log("dkhelti iwa bdl");
  var cols = idproduct.querySelectorAll("td");
  let tabl1 = [nom.value,marque.value,prix.value,date.value,type.value,getpromo(promotion),`<button id="remove${count}" onclick='productDelete(this)' ><i class="fa-solid fa-trash"></i></button><button id="update${count}" onclick='productUpdate(this)'><i class="fa-solid fa-pen-to-square"></i></button>`];
  console.log(tabl1);
  for (let i = 0; i < tabl1.length; i++) 
  {
    cols[i].innerHTML = tabl1[i];
  }
  clearinput();
  btn.value = "AJOUTER";
}
function clearinput() {
  nom.value = "";
  marque.value = "";
  prix.value = "";
  date.value = "";
  type.value = "";
  for (let i = 0; i < promotion.length; i++) {
    promotion[i].checked = false;
  }
  var formcontrol = form.querySelectorAll(".form-control");
  formcontrol.forEach((ele) => {
    if (ele.classList.contains("form-control-succes"))
    {
      ele.classList.remove("form-control-succes");
    }
  });
}
function add() {
  var tableau = document.getElementById("productList");
  let product = [nom.value,marque.value,prix.value,date.value,type.value,getpromo(promotion),`<button id="remove${count}" onclick='productDelete(this);' ><i class="fa-solid fa-trash"></i></button><button id="update${count}" onclick='productUpdate(this);'><i class="fa-solid fa-pen-to-square"></i></button>`,];
  console.log(product);
  var column = document.createElement("tr");
  column.setAttribute("id", "tr" + count);
  tableau.appendChild(column);
  for (let i = 0; i < product.length; i++) {
    var column1 = document.getElementById("tr" + count);
    var row = document.createElement("td");
    row.setAttribute("id", "td" + count + i);
    column1.appendChild(row);
    var contenu = document.getElementById("td" + count + i);
    contenu.innerHTML = product[i];
  }
  clearinput();
}

function validinput(input,regex,message)
{
    regex.test(input.value)==true ? setsucces(input) :setError(input,message)
    // if(regex.test(input.value)==true)
    // {
    //     setsucces(input)
    // }
    // else
    // {
    //     setError(input,message)
    // }
}
let today = new Date().toLocaleDateString()
nom.addEventListener('input',function(){
    validinput(nom,/^(^[a-z]+['-\s]?[a-z]+)$/gi,"champ no valid")
})
marque.addEventListener('input',function(){
    validinput(marque,/^(^[a-z]+['-\s]?[a-z]+)$/gi,"champ no valid")
})
prix.addEventListener('input',function(){
    validinput(prix, /^(^\d+([,.]?\d+$)?)$/gi,"champ no valid")
})
date.addEventListener('input',function(){
    let today = new Date().toLocaleDateString()
    console.log(today);
    validinput(date,`/^${today}$/`,"champ no valid")
})