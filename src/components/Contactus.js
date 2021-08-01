import React,{useState} from 'react';
import AddContact from './AddContact';
import Header from './Header';

const Contactus = () => {

    const [cust,setCust]=useState('')
    const [issue,setIssue] = useState('')

    const handelIssueReq = (event) =>{
        event.preventDefault();
        if(cust.trim().length===0 || issue.trim().length===0){
            return;
        }
        addUserHandler(cust,issue);
        setCust('');
        setIssue('');
    }

    const emailChangeHandler = (event) =>{
        setCust(event.target.value)
    }

    const issueChangeHandler = (event) =>{
        setIssue(event.target.value)
    }
    const [emailList,setEmailList] = useState([]);
    
    const addUserHandler = (uEmail,uIssue) =>{
        setEmailList((prevEmailList) =>{
            return[...prevEmailList,{email: uEmail,issue: uIssue}]
        })
    }

    return (
        <div>
            <div className="container-fluid px-0 mb-3">
                <Header />
            </div>
            <div class="container mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={cust} onChange={emailChangeHandler} />
            </div>
            <div class="container mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Issue</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="How can I help you" value={issue} onChange={issueChangeHandler}/>
            </div>
            <button type="button" class="btn btn-primary" onClick={handelIssueReq}>Contact us</button>

        <AddContact users={[emailList]}/>
        </div>



    )
}


export default Contactus