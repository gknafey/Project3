import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./style.css";

const ReferBtn = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    // <span className="refer-btn" {...props} role="button" tabIndex="0">
    //   Refer Job
    // </span>

    <ButtonDropdown className="refer-btn" {...props} role="button" tabIndex="0" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Refer Job
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Referees</DropdownItem>
        <DropdownItem>Tim Artist</DropdownItem>
        <DropdownItem>Jerry</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>David Smith</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>

  );
}

export default ReferBtn;