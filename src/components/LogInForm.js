import React from 'react';


class LogInForm extends React.Component {

    state = { login: "", password: "" };


    handleLogIn =(e)=> {
        this.setState({ login: e.target.value })
    }

    handlePassword =(e)=> {
        this.setState({ password: e.target.value })
    }

    render() {

        return (
                <form>
                    <input value={this.state.login} onChange={this.handleLogIn} />
                    <input value={this.state.password} onChange={this.handlePassword} type="password" />
                </form>
        )
    }

}

export default LogInForm;