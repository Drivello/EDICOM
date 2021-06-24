import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    //bajo la imagen en responsive

    container: {
        textAlign: 'center',
       
    },
}))

const title = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.container}>
                <h1 className={classes.container}>Ventajas</h1>
            </div>
        </div>
    )
}

export default title
