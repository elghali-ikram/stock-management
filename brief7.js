const nom=document.getElementById("nom")
const marque=document.getElementById("marque")
const prix=document.getElementById("prix")
const date=document.getElementById("date")
const type=document.getElementById("type")
const promotion=document.getElementsByName("promotion")
var btn=document.getElementById("ajouter")

btn.addEventListener('click',click)
function click() {
    if(nom.value === "")
    {
        setError(nom,"champ obligatoire")
        console.log("howa")
    }
    else
    {
        setsucces(nom)
    }
    if(marque.value === "")
    {
        setError(marque,"champ obligatoire")
        console.log("howa")
    }
    else
    {
        setsucces(marque)
    }
    if(prix.value === "")
    {
        setError(prix,"champ obligatoire")
        console.log("howa")
    }
    else
    {
        setsucces(prix)
    }
    if(date.value === "")
    {
        setError(date,"champ obligatoire")
        console.log("howa")
    }
    else
    {
        setsucces(date)
    }
    if(type.selectedIndex< 1)
    {
        setError(type,"champ obligatoire")
        console.log("howa")
    }
    else
    {
        setsucces(type)
    }
    for (let i= 0; i< promotion.length; i++) {
        if(promotion[i].checked)
        {
            setsucces(promotion[i])
            console.log("howa")
            break;
        }
        else
        {
            setError(promotion[i],"champ obligatoire")
        }
        
    }
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
    console.log(formcontrol.className)
    small.textContent=" ";
}

