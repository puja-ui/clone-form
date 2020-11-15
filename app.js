  function addRow() {
  
    var itm = document.getElementById("template");
    var cln = itm.cloneNode(true);
    document.getElementById("repeatafterme").appendChild(cln);
  
  }
//onsubmit="return false"