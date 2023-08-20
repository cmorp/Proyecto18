import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './socialButton.css';

function SocialButton (prop) {

  return (
    <div>
      
      <i >{prop.nameicon}</i>
    </div>
  )
}
export default SocialButton;