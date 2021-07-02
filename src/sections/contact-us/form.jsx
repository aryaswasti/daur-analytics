import React, { useState } from "react";

import './form.css';

const Form = () => {
    const [isEmptyEmail, setEmptyEmail] = useState(true);
    const [isEmptyName, setEmptyName] = useState(true);

    return(
    <form>
        <input name='name'
           type='text'
           className='text-box'
        // value={this.state.name}
           placeholder='  Name'
           onChange={(event) => event.target.value.length ? setEmptyName(false) : setEmptyName(true)}
           style={ isEmptyName ?
            { backgroundColor: "#f8d7da" } :
            { backgroundColor: "white" } }
        required
        />
            <br />
        <input name='address'
               type='text'
               className='text-box'
            // value={this.state.name}
               placeholder='  Address'
            // handleChange={this.handleChange}
            required
        />
            <br />
        <input name='email'
               type='email'
               className='text-box'
            // value={this.state.name}
               placeholder='  Email'
               onChange={(event) => event.target.value.length ? setEmptyEmail(false) : setEmptyEmail(true)}
               style={ isEmptyEmail ?
                { backgroundColor: "#f8d7da" } :
                { backgroundColor: "white" } }
               required
        />
            <br />
        <input name='phone'
               type='tel'
               className='text-box'
            // value={this.state.name}
               placeholder='  Phone'
            // handleChange={this.handleChange}
            required
        />
            <br />
        <input name='subject'
               type='text'
               className='text-box'
            // value={this.state.name}
               placeholder='  Subject'
            // handleChange={this.handleChange}
            required
        />
            <br />
        <textarea name='message'
               className='message-text-box'
            // value={this.state.name}
               placeholder='  Type your message here...'
            // handleChange={this.handleChange}
            required
        />
            <br />
        <button>Submit</button>
    </form>
)};

export default Form;