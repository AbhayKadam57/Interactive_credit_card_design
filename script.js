const Name = document.getElementById("name")

const form = document.getElementById("form")

const NameError = document.querySelector(".error-name")

const Number = document.getElementById("number")

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

Number.addEventListener("keyup",(e)=>{


     
    
    
    
    if(e.target.value.length==4 || e.target.value.length==9 || e.target.value.length==14){
        
    
        e.target.value+=" "

    } 

   
}
)

Number.addEventListener("click",(e)=>{


    Number.value=""

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

    // console.log(Number.value)

    // console.log(typeof(Number.value))

    // console.log([...Number.value])

    const CardNumber = [...Number.value]    

    let Value =[]

    let space =[]

    CardNumber.map((item,index)=>{

    

      if(item==" "){

        space.push(item)
      }else{

        Value.push(parseInt(item))
        
      }

      

    })

    console.log(Value)




    let index = Value.findIndex(item=>isNaN(item))

    if(index>=0 || !Number.value){

        NumberError.style.display="block"
        Number.style.border="2px solid hsl(0, 100%, 66%)"
    }else{

        NumberError.style.display="none"
        Number.style.border="2px solid hsl(270, 3%, 87%)"

    }
    
    if(!month.value){
        
        
        if(!month.value){

            month.style.border="2px solid hsl(0, 100%, 66%)"
            DateError.style.display="block"
        }else{

            month.style.border="2px solid hsl(270, 3%, 87%)"
            DateError.style.display="none"  
        }

       

       
        
    }else{

        month.style.border="2px solid hsl(270, 3%, 87%)"
        year.style.border="2px solid hsl(270, 3%, 87%)"
    }



    if(!year.value){

        DateError.style.display="block"
        year.style.border="2px solid hsl(0, 100%, 66%)"
    }else{
        DateError.style.display="none"  
        year.style.border="2px solid hsl(270, 3%, 87%)"
       
    }

    if(!cvv.value){
        
        CVVError.style.display="block"
        cvv.style.border="2px solid hsl(0, 100%, 66%)"
    }else{

        DateError.style.display="none"
        CVVError.style.display="none"
        month.style.border="2px solid hsl(270, 3%, 87%)"
        year.style.border="2px solid hsl(270, 3%, 87%)"
        cvv.style.border="2px solid hsl(270, 3%, 87%)"

        type.style.display="none"

        complete.style.display="flex"

    }

 


    displayNumber.innerText = !Number.value ? "0000 0000 0000 0000" : Number.value

    displayName.innerText = !Name.value ? "JANE APPLESEED" : Name.value

    displayMonth.innerText = !month.value ? "00" : month.value


    displayYear.innerText = !year.value ? "00" : year.value

    displayCvv.innerText = !cvv.value ? "000" : cvv.value
    
  
   


})


Continue.addEventListener("click",()=>{

    Name.value=""

    Number.value=""

    month.value=""

    year.value=""

    cvv.value=""

    type.style.display="flex"

    complete.style.display="none"
    
    

})