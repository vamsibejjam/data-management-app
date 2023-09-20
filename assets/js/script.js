


function selector(x){
  
  table=document.getElementById("table1");
  rows=table.getElementsByTagName('tr'); 
  cur_index=x.rowIndex;
  color_len=rows[cur_index].style.backgroundColor.length;
  anchor=document.getElementById("anchor2");
 
 
  for ( i = 0; i < rows.length; i++) {
    if (i==cur_index ){
      if (color_len==0){
        rows[i].style.backgroundColor="#5A5A5A"; 
        rows[i].style.color="white";
        curr_row_index=rows[i].getElementsByTagName('td')[0].innerHTML; 
        url= "http://127.0.0.1:8000/delete"+"/"+curr_row_index;
        anchor.setAttribute("href", url);   

      }else{
        anchor.setAttribute("href","");
        rows[i].style.backgroundColor="";
        rows[i].style.color="";   
      }
      
    }
    else{
      rows[i].style.backgroundColor="";
      rows[i].style.color="";   
    
  } 
   
}
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
table = document.getElementById("table1");

  dir = "asc";
  switching = true;
  while (switching) {
    
    switching = false;
    rows = table.getElementsByTagName('tr');
   
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
     
      x = rows[i].getElementsByTagName('td')[n];
      y = rows[i + 1].getElementsByTagName('td')[n];
  
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
   
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
    
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
     
      switchcount++;
    } else {
      
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


function edit(x){
  table=document.getElementById("table1");
  rows=table.getElementsByTagName('tr'); 
  but=document.getElementById("add")
  but.style.visibility="hidden";
  cur_index=x.rowIndex;
  prodName=document.getElementById("product-name");
  prodName.value=rows[cur_index].getElementsByTagName('td')[0].innerHTML;
  vol=document.getElementById("volume")
  vol.value=rows[cur_index].getElementsByTagName('td')[1].innerHTML;
  vol=document.getElementById("market-capital")
  vol.value=rows[cur_index].getElementsByTagName('td')[2].innerHTML;
  vol=document.getElementById("credit-rating")
  vol.value=rows[cur_index].getElementsByTagName('td')[3].innerHTML;
  var url= "http://127.0.0.1:8000/update"+"/"+rows[cur_index].getElementsByTagName('td')[0].innerHTML; 
  mapped=document.getElementById("bro");
  mapped.setAttribute("action",url); 
  button_update=document.getElementById("updat");
  button_update.style.display="block";
}

function magic(){
  butt=document.getElementById("updat");
  butt.style.display="none";
}

