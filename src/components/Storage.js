import React,{useState} from 'react';
import classes from './Style.module.css';

const Storage = () =>{
    const [isHovering,setIsHoovering]=useState(false);

    const handelMouseEnter = (event) =>{
        setIsHoovering(true);
        }

    return(
        <div className={classes.io} >
            <h4 className="mb-3">Items We Have</h4>
            <i className={classes.io}>
            <img  className={`${classes.maap} `}  src="./images/mango.jpg " width="300" height="450" alt="img-responsive" onMouseEnter={handelMouseEnter}  />
            </i>
            <i className={classes.io}>
            <img className={`${classes.maap} `} src="./images/Carrots.jpg " width="300" height="450" onMouseEnter={handelMouseEnter}  alt="img-responsive" />
            </i>
            <i className={classes.io}>
            <img  className={`${classes.maap} `}  src="./images/Tamato.jpg " width="300" height="450" onMouseEnter={handelMouseEnter}  alt="img-responsive" />
            </i>
            <i className={classes.io}>
            <img  className={`${classes.maap} `}  src="./images/Banana.jpg " width="300" height="450" onMouseEnter={handelMouseEnter}  alt="img-responsive" />
            </i>
            <div className={classes.io}>
                <i className={classes.io}>
                <img  className={`${classes.maap} `}  src="./images/onions.jpg " width="300" height="450" onMouseEnter={handelMouseEnter}  alt="img-responsive" />
                </i>
                <i className={classes.io}>
                <img  className={`${classes.maap} `}  src="./images/brocklee.jpg " width="300" height="450" onMouseEnter={handelMouseEnter}  alt="img-responsive" />
                </i>
                <i className={classes.io}>
                <img  className={`${classes.maap} `}  src="./images/Corn.jpg " width="300" height="450" onMouseEnter={handelMouseEnter}  alt="img-responsive" />
                </i>
            </div>
            
        </div>
    )
}

export default Storage 