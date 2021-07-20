import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}) {
    return(
        <Route { ...rest} render= {() => {
            if(window.localStorage.getItem('token')){
                return <Component /> 
             } else {
                    return <Redirect to= '/login' /> ;  
                }
            }}
        />
    );
}




export default PrivateRoute;


// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({ component:Component, ...rest}) => {
//     return <Route {...rest} render={(props)=> {
//         if (localStorage.getItem('token')) {
//             return <Component {...props}/>
//         } else {
//             return <Redirect to="/login"/>
//         }
//     }}/>
// }

// export default PrivateRoute;