"use strict";

import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Col, form, Grid} from 'react-bootstrap'
import Page from './Page';
import {connect} from "react-redux";
import * as actions from "../state/actions/astronauts";
import Row from "react-bootstrap/es/Row";
import Table from "react-bootstrap/es/Table";
import Glyphicon from "react-bootstrap/es/Glyphicon";
import {AstronautListRow} from "./AstronautListRow";
import {CreateAstronautModal} from "./createAstronaut/CreateAstronautModal";
import {EditAstronautModal} from "./EditAstronaut/EditAstronautModal";
import {showEditModal} from "../state/actions/astronauts";


class ListPage extends React.Component {
    componentWillMount() {
        this.props.dispatch(actions.getAstronauts());
    }

    render() {
        return (
            <Page>
                <Grid>
                    <Row>
                        <Col>
                            <Table striped bordered condensed hover responsive>
                                <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>

                                    <th>
                                        Surname
                                    </th>
                                    <th>
                                        Birth date
                                    </th>

                                    <th>
                                        Super ability
                                    </th>
                                    <th>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.state.astronauts.map(astr => <AstronautListRow key={astr._id} {...astr}
                                                                                           remove={(id) => this.props.dispatch(actions.deleteAstronaut(id))}
                                                                                           edit={(id) => this.props.dispatch(showEditModal(id))}
                                />)}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Grid>

                <Button bsStyle="primary" onClick={() => {
                    this.props.dispatch(actions.showCreateModal())
                }}><Glyphicon glyph="plus"/></Button>
                {this.props.state.createModal &&
                <CreateAstronautModal closeDialog={() => this.props.dispatch(actions.hideCreateModal())}
                                      onInputChange={(e) => this.props.dispatch(actions.createInputChange(e.target.name, e.target.value))}
                                      inputs={this.props.state.createInputs}
                                      submit={() => this.props.dispatch(actions.createAstronaut(this.props.state.createInputs))}
                />}
                {this.props.state.editModal &&
                <EditAstronautModal closeDialog={() => this.props.dispatch(actions.hideEditModal())}
                                    onInputChange={(e) => this.props.dispatch(actions.editInputChange(e.target.name, e.target.value))}
                                    inputs={this.props.state.editInputs}
                                    submit={() => this.props.dispatch(actions.updateAstronaut(this.props.state.editInputs))}
                />
                }
            </Page>
        );
    }
}

export default withRouter(connect(store => {
    return {
        state: store.astronauts
    }
})(ListPage));
