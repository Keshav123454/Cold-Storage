import React from 'react';
import Card from './Card';

const AddContact = (props) =>{
    return(
        <Card>
            <ul>
                {props.users.map((user) => (
                    <li>
                        {user.name} issue: ({user.issue})
                    </li>    
                ))}
            </ul>


        </Card>
        )
}
            
export default AddContact;
        