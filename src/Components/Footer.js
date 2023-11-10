import React from 'react'

export default function Footer() {
    const Today = new Date();
    const Year = Today.getFullYear();

  return (
    <div>
        <h5>Copyright &copy; {Year}</h5>
    </div>
  )
}
