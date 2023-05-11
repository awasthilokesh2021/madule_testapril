fetch("product.json")
.then((response)=>
  response.json())
.then((data)=>{
  let place = document.querySelector('#data-json')
  var out = "";
  for(var k of data){
    out += `
       <tr>
        <td>${k.id}</td>
        <td>${k.first_name}</td>
        <td>${k.last_name}</td>
        <td>${k.gender}</td>
        <td>${k.email}</td>
        <td><img src="${k.img_src}"></td>
       </tr>
    `;
}

  place.innerHTML = out;
})