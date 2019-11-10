import React from 'react'

export default class signUp extends React.Component{
    render() {
        return (
            <div>
                <form>
                    <h1>SignUp</h1>
                    <div>
                    <label htmlFor="name">Name</label>
                    <input type='text' name="name" placeholder="your name..." />
                    <label htmlFor="age">Age</label>
                    <input type='number' name="age" placeholder="your age..." />
                    <label htmlFor="password">Password</label>
                    <input type='password' name="password" placeholder="your password..." />
                    </div>
                </form>
            </div>
        )
    }
}
