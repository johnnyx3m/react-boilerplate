import React from 'react'
import { connect } from 'react-redux'
import * as UserActions from './../../actions/UserActions'
import { FieldGroup } from 'react-bootstrap'

class UserFormContainer extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        if(this.props.match.params && this.props.match.params.id){
            this.props.getUser(this.props.match.params.id)
        }
    }
    handleOnChange = (e, propName) =>{
        this.props.updateCurrentUser({[propName]: e.target.value})
    }

    handleSubmit = () =>{
        this.props.createUser()
    }
    render(){
        const { currentUser } = this.props

        return (
            <div>
                <div className="form-group">
                    <label for="id" class="control-label">ID</label>
                    <input type="text" id="id" class="form-control" />
                </div>
                <div className="form-group">
                    <label for="name" class="control-label">Name</label>
                    <input placeholder="Enter Name" type="number" id="name" class="form-control" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      currentUser: state.user.currentUser
    }
  }
  
  const mapDispatchToProps = {
    getUser: UserActions.getUser,
    createUser: UserActions.createUser,
    deleteUser: UserActions.deleteUser,
    updateCurrentUser: UserActions.updateCurrentUser
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer)