import React from 'react'
import withFirebaseAuth from './Login'
 const FirebaseContext = React.createContext(null);
  export  const   withFirebase = (Component)=>(props) =>(
        <firebaseContext>
         {(firebase)=> <Component{...props} firebase={firebase}/>};
        <withFirebaseAuth/>
     </firebaseContext>

  );
   
     export default FirebaseContext;
 