const Name = document.getElementById("name")

const form = document.getElementById("form")

const NameError = document.querySelector(".error-name")

const CardNumber = document.getElementById("number")

const NumberError = document.querySelector(".error-number")
const DateError = document.querySelector(".error-date")
const YearError = document.querySelector(".error-date_1")
const CVVError = document.querySelector(".error-cvv")


const month = document.getElementById("month")

const year = document.getElementById("year")

const cvv = document.getElementById("cvv-number")


const displayNumber = document.getElementById("card-number")


const displayName = document.getElementById("displayName")
const displayMonth = document.getElementById("displayMonth")
const displayYear = document.getElementById("displayYear")
const displayCvv = document.getElementById("displayCvv")


const complete = document.querySelector(".complete")

const type = document.querySelector(".type")

const Continue = document.getElementById("continue")

CardNumber.addEventListener("keyup",(e)=>{


     
    
    
    
    if(e.target.value.length==4 || e.target.value.length==9 || e.target.value.length==14){
        
    
        e.target.value+=" "

    } 

   
}
)

CardNumber.addEventListener("click",(e)=>{


    CardNumber.value=""

})




form.addEventListener('submit',(e)=>{

    

    e.preventDefault()


    if(!Name.value){

        NameError.style.display="block"
        Name.style.border="2px solid hsl(0, 100%, 66%)"
    }else{

        NameError.style.display="none"
        Name.style.border="2px solid hsl(270, 3%, 87%)"
    }

    const CardNumbers = [...CardNumber.value]    

    let Value =[]

    let space =[]

    CardNumbers.map((item,index)=>{

    

      if(item==" "){

        space.push(item)
      }else{

        Value.push(parseInt(item))
        
      }

    
    })

    console.log(Value)




    let index = Value.findIndex(item=>isNaN(item))

    if(index>=0 || !CardNumber.value){

        NumberError.style.display="block"
        CardNumber.style.border="2px solid hsl(0, 100%, 66%)"
    }else{
        NumberError.style.display="none"
        CardNumber.style.border="2px solid hsl(270, 3%, 87%)"
    }
    
    
    if(!month.value){
        
        month.style.border="2px solid hsl(0, 100%, 66%)"
        DateError.style.display="block"
        
    }else {
        month.style.border="2px solid hsl(270, 3%, 87%)"
        DateError.style.display="block"


    }
    
    
    
    if(!year.value){

        DateError.style.display="block"
        year.style.border="2px solid hsl(0, 100%, 66%)"
    }else{

        year.style.border="2px solid hsl(270, 3%, 87%)"
        DateError.style.display="none"
    }
    
    
    
    if(!cvv.value){
        
        CVVError.style.display="block"
        cvv.style.border="2px solid hsl(0, 100%, 66%)"
    }else{

        CVVError.style.display="none"      
        cvv.style.border="2px solid hsl(270, 3%, 87%)"
    
        
    }

    

    if(index<0 && CardNumber.value && month.value && year.value && cvv.value && Name.value){


        type.style.display="none"

        complete.style.display="flex"
    }


    displayNumber.innerText = !CardNumber.value ? "0000 0000 0000 0000" : CardNumber.value

    displayName.innerText = !Name.value ? "JANE APPLESEED" : Name.value

    displayMonth.innerText = !month.value ? "00" : month.value


    displayYear.innerText = !year.value ? "00" : year.value

    displayCvv.innerText = !cvv.value ? "000" : cvv.value
    
  
   


})


Continue.addEventListener("click",()=>{

    Name.value=""

    CardNumber.value=""

    month.value=""

    year.value=""

    cvv.value=""

    type.style.display="flex"

    complete.style.display="none"
    
    

})