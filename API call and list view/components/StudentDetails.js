import React from "react";
import Link from "next/dist/client/link";
import Image from "next/image";

const studentDetails = (props) => {

    const [open, setOpen] = React.useState(false);
    const toggleOpen = () => setOpen(!open);

    function add(accumulator, a) {
        return accumulator + parseInt(a);
    }
    function avg(a,b) {
        return parseInt(a)/b;
    }
  return (
    <div className="row">
        <div className="col-md-2 pt-5" >
            <img className="rounded-full" layout="fixed"  src={props.currStudent.pic} width={100} height={100} style={{border: '1px solid black', borderRadius:"50%", overflow: 'hidden'}} /><br/>
        </div>
        <div className="col-md-9">
        
            <h1 className="pt-3"><strong>{props.currStudent.firstName} {props.currStudent.lastName}<br/></strong></h1>
            <p>Email: {props.currStudent.email}<br/>
            Company: {props.currStudent.company}<br/>
            Skills: {props.currStudent.skill}<br/>
            Average: {props.currStudent.grades.reduce(add, 0)/props.currStudent.grades.length}%</p>
        </div>
        <div className="col-md-1">
        <button className="btn" type="button" onClick={toggleOpen}>
            <h2>{open ? "-" : "+"}</h2>
        </button>
        </div>
        <div className="col-md-2">
        </div>
        <div className="col-md-9">

        {open ? <div>
            <div className="">
                {console.log("Here")}
                
                    {props.currStudent.grades.map((grade, index) => {
                        return <h6 key={index}>Test {index} : &emsp;&emsp;  {grade}%</h6>
                    }
                    )}
                
            </div>
        </div>: null}
        </div>
        </div>
            
      

        
    
  );
};

export default studentDetails;
