interface values{

name:string
pass:string
mail:string

}

function getUserData(data:values):void{
try {
    localStorage.setItem("student_login",JSON.stringify(data))

} catch (error) {
    console.log(error);
    
}

}

document.addEventListener("DOMContentLoaded", () => {
  const saveDraft =  document.querySelector(".S_btn") as HTMLButtonElement;
  const getname =  document.querySelector(".name") as HTMLInputElement;
  const getpass =  document.querySelector(".pass") as HTMLInputElement;
  const getmail =  document.querySelector(".mail") as HTMLInputElement;

  saveDraft.addEventListener("click",(event:MouseEvent)=>{
    event.preventDefault()
    console.log("button click");

    const loginDetails:values ={
      name:getname.value,
      pass:getpass.value,
      mail:getmail.value
    }
    getUserData(loginDetails)
  })
})




