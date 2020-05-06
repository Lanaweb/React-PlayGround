import React from 'react';


class ProfileForm extends React.Component{
    state={
        firstName:"",
        lastName:"",
        state:false,
        married:false,
        gender:"",
        birthday:"",
        show:false,
    }

    handleFirstName=(e)=>{
        this.setState({firstName:e.target.value})
    }

    handleLastName=(e)=>{
        this.setState({lastName:e.target.value})
    }

    handleState=(e)=>{
        this.setState({state:e.target.value})
    }

    handleMarried=(e)=>{
        this.setState({married:e.target.checked})
    }

    handleGender=(e)=>{
        this.setState({gender:e.target.value})
    }






    render(){
        let {firstName,lastName,state,married,gender,birthday,} =this.state

        // let firstName=this.state.firstName;
        // let lastName=this.state.lastName;
        // let state=this.state.state;
        // let gender=this.state.gender;
        // let birthday=this.state.birthday; 

        return(
            <>
            <form className="profileform">
                <label> First Name: <input value={firstName} onChange={this.handleFirstName}/> </label>
                <label> Last Name: <input value={lastName} onChange={this.handleLastName}/> </label>
                <label> State:
                    <select id="state" value={state} onChange={this.handleState}>
                        <option value="California">California</option>
                        <option value="Nevada">Nevada</option>
                        <option value="Florida">Florida</option>
                    </select>
                </label>
                <label> Married: <input checked={married} type="checkbox" onChange={this.handleMarried}/></label>
                <label> Gender:
                    <label> <input type="radio" value="female" checked={gender==='female'} onChange={this.handleGender}/> Female </label>
                    <label> <input type="radio" value="male" checked={gender==='male'} onChange={this.handleGender}/> Male </label>
                    <label> <input type="radio" value="other" checked={gender==='other'} onChange={this.handleGender}/> Other </label>  
                </label>
            </form>
            <button onClick={()=>this.setState({show:true})}>Change</button>
            {this.state.show && (
                <>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{state}</p>
                    <p>{married}</p>
                    <p>{gender}</p>
                </>
            )}
            </>
        )
    }
}

export default ProfileForm; 