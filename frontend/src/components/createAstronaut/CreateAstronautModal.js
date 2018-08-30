"use strict";

import React from 'react';
import FormControl from "react-bootstrap/es/FormControl";
import FormGroup from "react-bootstrap/es/FormGroup";
import HelpBlock from "react-bootstrap/es/HelpBlock";
import Button from "react-bootstrap/es/Button";
import Modal from "react-bootstrap/es/Modal";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import {AstronautForm} from "./AstronautForm";

export const CreateAstronautModal = (props) =>
    <div className="static-modal">
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Create Astronaut</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <AstronautForm {...props}/>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.closeDialog}>Close</Button>
                <Button onClick={props.submit} bsStyle="primary">Create</Button>
            </Modal.Footer>
        </Modal.Dialog>
    </div>;