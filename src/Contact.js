import React,{useEffect, useState} from 'react';

function Contact(props){

    const [val,setVal]=useState("ALI");
    const test =(e)=>{
        console.warn("test function",e.target.value);
        setVal(e.target.value);
    }

    // const [name,setName]=useState('Abdullah')
    // const [age,setAge]=useState(12)
    // useEffect(()=>{
    //     console.warn('use Effect from Hook',props);
    // },[])
    // useEffect(()=>{
    //     console.warn('Life Cycle 2 for Update',props.name);
    // },[props.name])
    // let data = "Contact Us Page"
    return(
        <div>
            <h1>Contact Us</h1>
            <button onClick={()=>{console.warn("hello on click")}}>Click Me</button>
            <button onClick={test}>Click Function</button>
            <input type="text" value={val} onChange={test}/>
            
            <button onClick={()=>alert(val)}>Alert value</button>

            {/* <h1>{data}</h1> */}
            {/* <h2>{props.name}</h2> */}
            {/* <p>{name}</p>
            <p>{age}</p> */}
            {/* <button onClick={()=>setName("Abdullah Hameed")}>Update Name</button>
            <button onClick={()=>setAge(34)}>Update Age</button> */}
        </div>
    )
}

export default Contact;