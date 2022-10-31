import './Users.css'
import React,{useEffect,useState} from 'react'
import Userlist from './Userlist'




const Users = () => {
 



const [Data, setData] = useState([]);
const [Loading,setLoading]= useState(false)
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(5);


const [pagenumberlimit]=useState(5)
const [maxpagenumber,setmaxpagenumber]=useState(5)
const [minpagenumber,setminpagenumber]=useState(0)
  
  const FetchApi = async ()=>{

        setLoading(true)
    const response = await fetch('https://randomuser.me/api/?results=60')
if(!response.ok){
    throw new Error ('something went wrong')
}
       const data = await response.json()
    setLoading(false)
       const Apiresult = data.results
        
       const transformedData = [];
        



   // Formatting the body data to what we need
       Apiresult.map((each)=> { return (
           transformedData.push({
               image:each.picture.medium,
               phone: each.phone,
               title:each.name.title,
               name: `${each.name.first} ${each.name.last}`,
               location:each.location.city,
               age: each.dob.age,
               date: each.dob.date,
               address: `${each.location.street.name} ${each.location.street.number}`,
               country: each.location.country,
               city: each.location.city,
               state: each.location.state,
           })
       )
       })
        
        // Sending the data to the component that send the request
        setLoading(false)
        setData(transformedData)
    
    
     }
    
 
      useEffect(() => {
       FetchApi()
    }, [])


       
const lastPostIndex = currentPage * postsPerPage;
const firstPostIndex = lastPostIndex - postsPerPage;
const currentPosts = Data.slice(firstPostIndex, lastPostIndex);



    
  const page = []
  for(let i=1;i<Math.ceil(Data.length/postsPerPage); i++){
      page.push(i)
  }
  
   // let handle the click event to handle the pagenumber
  
   const Handlepagenumber=(event)=>{
    setCurrentPage(Number(event.target.value))
   }
  
  const renderpagenumber = page.map(number=>{
     if(number<maxpagenumber+1 && number>minpagenumber)
      return (
          <button
           className={currentPage===number? 'active' : ''} 
          key={number} 
          value={number}
          onClick={Handlepagenumber}
          >{number}</button>
      
     )
     return 
  })
  



 
 // onclick method for next button

 const handlenextbtn=()=>{
    setCurrentPage((prevpage)=>prevpage +1)
    if(currentPage+1 > maxpagenumber){
        setmaxpagenumber(maxpagenumber + pagenumberlimit)
        setminpagenumber(minpagenumber + pagenumberlimit)
    }
 }
 // onclick method for prev button

 const handleprevbtn=()=>{
    setCurrentPage((prevpage)=>prevpage -1)
    if((currentPage-1)%pagenumberlimit===0){
        setmaxpagenumber(maxpagenumber - pagenumberlimit)
        setminpagenumber(minpagenumber - pagenumberlimit)
    }
 }


//  handle pageincrementbtn for users to be aware


let incrementbtn = null 
    if(page.length>maxpagenumber){
        incrementbtn=<button onClick={handlenextbtn}>&hellip;</button>
    
 }

 //  handle pageincrementbtn for users to be aware

let decrementbtn = null 
    if(minpagenumber>=1){
        decrementbtn=<button onClick={handleprevbtn}>&hellip;</button>
    
 }
 


return Loading?(<div className='loading'>
  <h2>loading....</h2>
</div>) :(
  <div className='user-app'>
  
    <Userlist userdata={currentPosts}/>
        
     <div className='pagenumber'>
     <button 
     onClick={handleprevbtn}
     disabled={ currentPage === page[0] ?true :false}
     >Prev</button>

     {decrementbtn}
     {renderpagenumber}
     {incrementbtn}
   
     <button
     onClick={handlenextbtn}
     disabled={ currentPage === page[page.length-1] ?true :false}
     >Next</button>

     </div>
        
    
       </div>
   
) 

}


export default Users

