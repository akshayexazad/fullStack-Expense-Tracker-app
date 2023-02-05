
async function expense(event) {
    event.preventDefault();
    const food1 = event.target.food.value;
    const category1 = event.target.category.value;
    const description1 = event.target.foodname.value;
    const obj = {
      food1,
      category1,
      description1
    };
    axios.post('http://localhost:3000/add-user',obj)
    .then((Res)=>{
      console.log(Res.data.newuser)
      showOrderOnSreen(Res.data.newuser);
    }).catch((err)=>{
      document.body.innerHTML= document.body.innerHTML+"somthing went wrong";
      console.log(err);
    })
      
  };
    
   window.addEventListener("DOMContentLoaded", async () => {
    axios.get("http://localhost:3000/getuser").then((Res)=>{
          console.log(Res)
          for(var i=0; i<Res.data.alluser.length; i++){
            showOrderOnSreen(Res.data.alluser[i])
          }
    }).catch((err)=>{
      console.log(err)
     })
     

  });
   
  
  function showOrderOnSreen(order) {
    document.getElementById("food").value = "";
    document.getElementById("category").value = "";
    document.getElementById("foodname").value = "";
    const parentNode = document.getElementById("listOfUsers");

    const childHTML = `<li id=${order.id}> ₹${order.food} - ${order.category} - ${order.foodname} 
   <button onclick=editUserDetails('${order.food}','${order.category}','${order.foodname}','${order.id}')>Edit</button>
     <button onclick=deleteUser('${order.id}')> Delete</button> </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
  }

  function editUserDetails(food, category, description,user) {
    document.getElementById("food").value = food;
    document.getElementById("category").value = category;
    document.getElementById("foodname").value = description;
  
    deleteUser(user);
  }
  
  function deleteUser(user) {
    axios.delete(`http://localhost:3000/delete-user${user}`)
    .then((res)=>{
      console.log(res)
      removeUserFromScreen(user);
    }).catch((err)=>{
      console.log(err)
    });
    };
  
  
  function removeUserFromScreen(user) {
    const parentNode = document.getElementById("listOfUsers");
    const childNodeToBeDeleted = document.getElementById(user);
  if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted);

  }
  }