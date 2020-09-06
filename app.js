


function message() {
    var val = document.getElementById("val")
    var li = document.createElement("li")
    
    if (val.value == "") {
        console.log("notext")
    }
    else {
        

      var label = document.createElement("label")
      var input = document.createElement("input")
      input.setAttribute("type","checkbox")
      var para = document.createElement("p")
        var paragraph= document.createTextNode(val.value.toUpperCase())
        
        para.appendChild(paragraph)
      var span = document.createElement("span")

        

       
        label.appendChild(input)
        label.appendChild(para)
        label.appendChild(span)
        li.appendChild(label)

        var message = document.getElementById("message")
        message.appendChild(li)
       
        val.value = ""

    }
}


function deletebtn(e) {
    e.parentNode.remove()
}
function deleteall() {
    var uli = document.getElementById("message")
    uli.innerHTML = "";
}
function edit(e) {
    var editing = document.getElementById("edit")


    var inp = document.createElement("input")
    inp.setAttribute("id", "editval")
    var inpbtn = document.createElement("button")
    inpbtn.setAttribute("id", "change")
    inpbtn.setAttribute("onClick", "submit(this)")
    var inpbtntxt = document.createTextNode("submit")

    inpbtn.appendChild(inpbtntxt)

    e.parentNode.firstChild.nodeValue = ""
    e.parentNode.appendChild(inp)
    e.parentNode.appendChild(inpbtn)

    e.parentNode.childNodes[2].disabled = true


}
function submit(e) {
    e.parentNode.childNodes[2].disabled = false
    var editing = document.getElementById("edit")
    var inpvalue = document.getElementById("editval")
    e.parentNode.firstChild.nodeValue = inpvalue.value
    e.parentNode.childNodes[3].remove()
    e.remove()





}