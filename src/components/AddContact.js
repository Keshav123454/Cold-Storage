import React from 'react';
import Card from './Card';

const AddContact = (props) =>{
    return(
        <div>
            <ul>
                {props.users.map((user) => (
                    <li>
                        {user.name} issue: ({user.issue})
                    </li>    
                ))}
            </ul>


        </div>
        )
}
            
export default AddContact;
        
