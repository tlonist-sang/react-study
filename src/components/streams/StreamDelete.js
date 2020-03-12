import React, {useEffect} from "react";
import Modal from "../Modal";
import {useDispatch, useSelector} from "react-redux";
import history from "../../history";
import {fetchStream, deleteStream} from "../../actions";
import {Link} from "react-router-dom";

const StreamDelete = ({match}) => {
//react.fragment or <>

    const dispatch = useDispatch();
    const stream = useSelector(state=>state.streams[match.params.id]);

    useEffect(()=>{
        dispatch(fetchStream(match.params.id));
    }, [])

    const renderContent = () =>{
        console.log(stream);
        if(!stream){
            return 'Are ypu sure you want to delete the stream?'
        }
        return `Are you sure you want to delete the stream with title : ${stream.title}?`
    };

    const {id} = match.params;

    const actions = (
        <div>
            <React.Fragment>
                <button onClick={()=>{dispatch(deleteStream(id))}} className={"ui button negative"}>Delete</button>
                <Link to={"/"} className={"ui button"}>Cancel</Link>
            </React.Fragment>
        </div>
    )

    return(
        <Modal
            title="Delete Stream"
            content={renderContent()}
            actions={actions}
            onDismiss={() => history.push('/')}
        />
    );
}

export default StreamDelete;
