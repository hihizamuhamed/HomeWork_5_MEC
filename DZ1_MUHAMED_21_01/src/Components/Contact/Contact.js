import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h2>Наши Контакты</h2>
      <Link to ='/Contact' style={{display:'flex'}}>+996 555 555 555</Link>
      <Link to ='/Contact'>+996 999 999 999 </Link>
    </div>
  );
}

export default Contact;