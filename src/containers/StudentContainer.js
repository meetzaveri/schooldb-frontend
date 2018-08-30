import React, {Component} from 'react';
import Errorboundary from '../wrappers/errorboundary';
import Sidebar from '../components/sidebar';
import Content from '../components/content';
import StudentComponent from '../components/student'
import {routes} from '../routes/routes';

class StudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Errorboundary>
                <Sidebar selecedPane={1} routeToMap={routes.student}>Sidebar</Sidebar>
                <Content>
                    <StudentComponent/></Content>
            </Errorboundary>
        );
    }
}

export default StudentContainer;