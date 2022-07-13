import React from 'react';
import { useParams } from 'react-router-dom';
class Update extends React.Component{
    constructor(){
        super();
        this.state={
            full_name:'',
            email:'',
            address:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/employe/'+id+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>{
            console.log(data)
            this.props.history.push('/')
        });
        
    }

    fetchData(){
        var id=this.props.match.params.id;
        
        fetch('http://127.0.0.1:8000/employe/'+id)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                full_name:data.full_name,
                email:data.email,
          
                address:data.address
            });
        });
    }

    componentDidMount(){
        this.fetchData();
        // console.log(this.props)
    }
   

    render(){
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Full Name</th>
                        <td>
                            <input value={this.state.full_name} name="full_name" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input value={this.state.email} name="email" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    
                    <tr>
                        <th>Address</th>
                        <td>
                            <input value={this.state.address} name="address" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="submit" onClick={this.submitForm} className="btn btn-dark" />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Update;