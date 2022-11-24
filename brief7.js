const nom=document.getElementById("nom")
const marque=document.getElementById("marque")
const prix=document.getElementById("prix")
const date=document.getElementById("date")
const type=document.getElementById("type")
const promotion=document.getElementsByName("promotion")
var btn=document.getElementById("ajouter")
let count=0


btn.addEventListener('click',click)
function click() {
    if(nom.value === "")
    {
        setError(nom,"champ obligatoire")
        nom.focus()
        return false;
    }
    else
    {
        setsucces(nom)
    }
    if(marque.value === "")
    {
        setError(marque,"champ obligatoire")
        marque.focus();
        return false;

    }
    else
    {
        setsucces(marque)
    }
    if(prix.value === "")
    {
        setError(prix,"champ obligatoire")
        prix.focus();
        return false;


    }
    else
    {
        setsucces(prix)
    }
    if(date.value === "")
    {
        setError(date,"champ obligatoire")
        date.focus()
        return false;
    }
    else
    {
        setsucces(date)
    }
    if(type.selectedIndex< 1)
    {
        setError(type,"champ obligatoire");
        date.focus()
        return false;
    }
    else
    {
        setsucces(type)
    }
    for (let i= 0; i< promotion.length; i++) {
        if(promotion[i].checked)
        {
            setsucces(promotion[i])
            break;
        }
        else
        {
            setError(promotion[i],"champ obligatoire")
        }
    }
    count++;
    add()
}
function setError(input,message)
{
    var formcontrol=input.closest(".form-control")
    var small=formcontrol.querySelector("small")
    if(formcontrol.classList.contains("form-control-succes"))
    {formcontrol.classList.remove("form-control-succes")
    }formcontrol.classList.add("form-control-error")
    small.textContent=message
}
function setsucces(input)
{
    var formcontrol=input.closest(".form-control")
    var small=formcontrol.querySelector("small")
    if(formcontrol.classList.contains("form-control-error"))
    {formcontrol.classList.remove("form-control-error")
    }formcontrol.classList.add("form-control-succes")
    small.textContent=" ";
}
function getpromo(listpromo)
{
    for (let i = 0; i < listpromo.length; i++) {
        if(listpromo[i].checked)
        {
            return listpromo[i].value;
        }
    }
}

function createremove() {
    var dele=document.createElement('input')
    dele.setAttribute('type','button')
    dele.setAttribute('value','remove')
    dele.setAttribute('id','remove'+count)
    return dele
}
function createremove(parentele) {
    var dele=document.createElement('input')
    dele.setAttribute('type','button')
    dele.setAttribute('id','remove'+count)
    return dele
}
function productDelete(product) {
    product.closest("tr").remove();
}
function productUpdate(product) {
    var row=product.closest("tr");
    var cols= row.querySelectorAll("td")
    let tabl=new Array();
    cols.forEach(ele => {
        tabl.push(ele.innerHTML)
    });
    console.log(tabl);
    nom.value=tabl[0];
    marque.value=tabl[1];
    prix.value=tabl[2];
    date.value=tabl[3];
    type.value=tabl[4];
    for (let i = 0; i < promotion.length; i++) 
    {

    }
    prix.value=tabl[1];

    

    // nom.value=cols[1].innerText;

    
}
function add()
{
    var tableau=document.getElementById("productList");
    let product= [nom.value,marque.value,prix.value,date.value,type.value,getpromo(promotion),`<button id="remove${count}" onclick='productDelete(this);' ><i class="fa-solid fa-trash"></i></button><button id="update${count}" onclick='productUpdate(this);'><i class="fa-solid fa-pen-to-square"></i></button>`]
    console.log(product)
    var column=document.createElement('tr')
    column.setAttribute('id','tr'+count)
    tableau.appendChild(column)
    console.log(column)
    console.log(count);
    console.log(tableau)
    for (let i = 0; i < product.length; i++) {
        var column1=document.getElementById('tr'+count)
        var row=document.createElement('td')
        row.setAttribute('id','td'+ count +i);
        column1.appendChild(row);
        var contenu=document.getElementById('td'+count+i);
        contenu.innerHTML=product[i]
    }
    console.log(column)
    console.log(count);
    console.log(tableau)
}
function onlynumber()
{
     if(prix.value.match(/^\d+([,.]?\d+$)?/))
    {
        setsucces(prix);
    }
    else
    {
        setError(prix,"must be a number")
        prix.focus();
        return false
    }
}
