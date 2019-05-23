import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropText extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="danger" className="dropDownText">
                    Dallas/Forth Worth, TX
        </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Texas</DropdownItem>
                    <DropdownItem onClick={() => this.props.onSelectButton("dfw")}>Dallas/Forth Worth</DropdownItem>
                    <DropdownItem onClick={() => this.props.onSelectButton("austin")}>Austin</DropdownItem>
                    <DropdownItem onClick={() => this.props.onSelectButton("houston")}>Houston</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}