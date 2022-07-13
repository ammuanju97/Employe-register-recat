import React from "react";

class Add extends React.Component{
    constructor(){
        super();
        this.state={
            full_name:'',
            email:'',
            address:''
        }
        this.changeHandler=this.changeHandler.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
//input change hander///////
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });

    }

    ///submit form /////////
    submitForm(){
        fetch('http://127.0.0.1:8000/employe/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            full_name:'',
            email:'',
            address:''

        });

    }
    render(){


    return (
        <table className="table table-bordered">
            <tr>
                <th>Full Name</th>
                <td><input value={this.state.full_name} name="full_name" onChange={this.changeHandler} type="text" className="form-control" /></td>
                
            </tr>
            <tr>
                <th>Email</th>
                <td><input value={this.state.email} name="email" onChange={this.changeHandler} type="text" className="form-control" /></td>
                
            </tr>
            <tr>
                <th>Address</th>
                <td><input value={this.state.address} name="address" onChange={this.changeHandler} type="text" className="form-control" /></td>
                
            </tr>
            <tr>
                <td colSpan="2">
                    <input  type="submit" onClick={this.submitForm} className="btn btn-success"/>
                </td>
            </tr>

        </table>
    );
    

}
}
export default Add;