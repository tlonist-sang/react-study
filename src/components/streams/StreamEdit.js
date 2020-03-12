import React from "react";
import {connect} from "react-redux";
import {fetchStream, editStreams} from "../../actions";
import StreamForm from "./StreamForm";
import _ from 'lodash';
//with react router, each component needs to be designed to work in isolation (fetch its own data!)
//shouldn't always depend on the redux


class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStreams(this.props.match.params.id, formValues);
    };

    render(){
        if(!this.props.stream) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchStream, editStreams})(StreamEdit);
