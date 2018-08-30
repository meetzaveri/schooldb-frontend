import React, {Fragment} from 'react';
import './main.css'
import {Col, Nav, NavItem} from 'react-bootstrap';

const Sidebar = (props) => {
    return (
        <Fragment>
            <Col
                id="main_sidebar"
                xs={3}
                md={4}
                sm={4}
                lg={2}
                style={{
                padding: '0px'
            }}>
                <Nav className="nav_box" bsStyle="pills" stacked activeKey={props.selecedPane}>
                    <NavItem
                        eventKey={1}
                        href={props.routeToMap}
                        style={{
                        border: '0px'
                    }}>
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="/profile" title="Item">
                        Profile
                    </NavItem>
                </Nav>
            </Col>
        </Fragment>
    );
}

export default Sidebar;