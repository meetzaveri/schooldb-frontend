import React, {Component} from 'react';
import Errorboundary from '../wrappers/errorboundary'
import Sidebar from '../components/sidebar';
import Content from '../components/content';
import TeacherComponent from '../components/teacher';
import {routes} from '../routes/routes';

class TeacherContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Errorboundary>
                <Sidebar selecedPane={1} routeToMap={routes.teacher}>Sidebar</Sidebar>
                <Content>
                    <TeacherComponent/></Content>
            </Errorboundary>
        );
    }
}

export default TeacherContainer;