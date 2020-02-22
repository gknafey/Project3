import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./style.css";

const ReferBtn = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    

    <ButtonDropdown className="refer-btn" {...props} role="button" tabIndex="0" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className="drop-down-css">
        Refer Job
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Referees</DropdownItem>
        <DropdownItem onClick={()=> {console.log(document.getElementById("TA").value);}} id="TA" value="Tim Artist">Tim Artist</DropdownItem>
        <DropdownItem id="Jerry" value="Jerry">Jerry</DropdownItem>
        <DropdownItem id="NV" value="Nick Vuto">Nick Vuto</DropdownItem>
        <DropdownItem divider />
        <DropdownItem id="DS" value="David Smith">David Smith</DropdownItem>
        
        
        
      
      
      
      </DropdownMenu>
    </ButtonDropdown>

  );
}

export default ReferBtn;