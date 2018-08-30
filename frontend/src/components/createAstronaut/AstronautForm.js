"use strict";

import React from 'react';
import FormControl from "react-bootstrap/es/FormControl";
import FormGroup from "react-bootstrap/es/FormGroup";
import HelpBlock from "react-bootstrap/es/HelpBlock";
import Button from "react-bootstrap/es/Button";
import Modal from "react-bootstrap/es/Modal";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import {SpecialAbilities} from "../../constantLists/SpecialAbilities";

var DatePicker = require("react-16-bootstrap-date-picker");

export const AstronautForm = (props) =>
    <form>
        <FormGroup
            controlId="formBasicText"
            //validationState={}
        >
            <ControlLabel>Name</ControlLabel>
            <FormControl
                type="text"
                name="name"
                value={props.inputs.name}
                placeholder="Name"
                onChange={props.onInputChange}
            />
            <HelpBlock></HelpBlock>
        </FormGroup>

        <FormGroup
            controlId="formBasicText"
            //validationState={}
        >
            <ControlLabel>Surname</ControlLabel>
            <FormControl
                type="text"
                name="surname"
                value={props.inputs.surname}
                placeholder="Surname"
                onChange={props.onInputChange}
            />
            <HelpBlock></HelpBlock>
        </FormGroup>

        <FormGroup
            controlId="formBasicText"
            //validationState={}
        >
            <ControlLabel>Birth date</ControlLabel>
            <DatePicker name="birthDate" value={props.inputs.birthDate}
                        onChange={(value) => props.onInputChange({target: {name: 'birthDate', value}})} />
            <HelpBlock></HelpBlock>
        </FormGroup>

        <FormGroup
            controlId="formBasicText"
            //validationState={}
        >
            <ControlLabel>SuperAbility</ControlLabel>
            <FormControl componentClass="select" placeholder="Choose one"
                         name="ability"
                         value={props.inputs.ability}
                         onChange={props.onInputChange}
            >
                {Object.keys(SpecialAbilities.names).map((key) => <option key={key}
                                                                          value={key}>{SpecialAbilities.names[key]}</option>)}
            </FormControl>
            <HelpBlock></HelpBlock>
        </FormGroup>
    </form>;