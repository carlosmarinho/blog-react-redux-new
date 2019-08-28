import React from 'react';
import { connect } from 'react-redux';
/* if use the memoise we need this import { fetchUser } from '../actions';*/

class UserHeader extends React.Component {
    componentDidMount(){
        /* if use the memoise we need this 
        this.props.fetchUser(this.props.userId);
        */
    }

    render() {
        const { user } = this.props;
        if (!user) {
            return null;
        }
        return <div className="header">{user.name}</div>
        
    }
}


const mapStateToProps = (state, ownProps) => {

    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps, {/* if use the memoise we need this fetchUser*/})(UserHeader);