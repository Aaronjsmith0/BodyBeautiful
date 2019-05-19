import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class ServicesBtn extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
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
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret color="danger">
                    Search Services & Places
        </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Pamper</DropdownItem>
                    <DropdownItem onClick={() => this.props.onSelectButton("blowouts")}>Blowouts</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header>Restore</DropdownItem>
                    <DropdownItem onClick={() => this.props.onSelectButton("cupping")}>Cupping</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}