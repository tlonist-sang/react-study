import React, {useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../actions';


const GoogleAuth = () => {
    const auth = useRef(null);
    const dispatch = useDispatch();
    const isSignedIn = useSelector(state=>state.auth.isSignedIn);

    useEffect(()=>{
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '792171180853-tm4no4gigistqp0h8df42vsi78fdcahf.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                auth.current = window.gapi.auth2.getAuthInstance();
                onAuthChange(auth.current.isSignedIn.get());
                auth.current.isSignedIn.listen(onAuthChange);
            });
        });
    },[]);


    const onAuthChange = (isSignedIn) => {
      if(isSignedIn){
          dispatch(signIn(auth.current.currentUser.get().getId()));
      }else{
          dispatch(signOut());
      }
    };

    const onSignInClick = () => {
        auth.current.signIn();
    }

    const onSignOutClick = () => {
        auth.current.signOut();
    }


    const renderAuthButton = () => {
        if(isSignedIn == null)
            return null;
        else if(isSignedIn){
            return (
                <button
                    className={"ui red google button"}
                    onClick={()=>onSignOutClick()}
                >
                <i className={"google icon"} />
                SignOut
                </button>
            )
        }else{
            return(
                <button
                    className={"ui red google button"}
                    onClick={()=>onSignInClick()}
                >
                    <i className={"google icon"} />
                    Sign In with Google
                </button>
            )

        }
    }

    return(
        <div>
            {renderAuthButton()}
        </div>
    )
}

//useSelector ~ mapStateToProps

export default GoogleAuth;
