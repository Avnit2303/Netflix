import React from 'react'

const Checkvalidation = (emails,passwords,name) => {
    const emailchecked = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emails);
    const passwordchecked = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwords)

    if(!emailchecked) return "email invalid"
    if(!passwordchecked) return "password invalid"

      return null;
      
    
}

export default Checkvalidation