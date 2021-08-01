import React,{useState} from 'react';
import classes from './Style.module.css'

const Management = () => {

    const [isHovering,setIsHoovering]=useState(false);

        const handelMouseEnter = (event) =>{
        setIsHoovering(true);
        }
    return (
        
        <div className={classes.io} >
                       <center className={classes.io}><h5>Management Team</h5></center> 
        <center>
        <i className={`${classes.io} `}>
        <img  className={`${classes.mop} ${classes.rad}`}  src="./images/AjayKumar.jpg " width="175" height="200" alt="img-responsive" onMouseEnter={handelMouseEnter}  />
        </i>
        <i className={classes.io}>
        <img className={`${classes.mop} ${classes.rad} `} src="./images/AmarGupta.jpg " width="175" height="200" onMouseEnter={handelMouseEnter}  alt="img-responsive" />
        </i>
        <i className={classes.io}>
        <img  className={`${classes.mop} ${classes.rad} `}  src="./images/Avinashkak.jpg " width="175" height="200" onMouseEnter={handelMouseEnter}  alt="img-responsive" />
        </i>
        <i className={classes.io}>
        <img  className={`${classes.mop} ${classes.rad}`}  src="./images/Manindra.jpg " width="175" height="200" onMouseEnter={handelMouseEnter}  alt="img-responsive" />
        </i>
            <i className={classes.io}>
            <img  className={`${classes.mop} ${classes.rad}`}  src="./images/Nitin.jpg " width="175" height="200" onMouseEnter={handelMouseEnter}  alt="img-responsive" />
            </i>
            <i className={classes.io}>
            <img  className={`${classes.mop} ${classes.rad} `}  src="./images/Bhushan.jpg " width="175" height="200" onMouseEnter={handelMouseEnter}  alt="img-responsive" />
            </i>
            </center>
    </div>
    )
}

export default Management