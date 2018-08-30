"use strict";

import React from 'react';
import Button from "react-bootstrap/es/Button";
import Glyphicon from "react-bootstrap/es/Glyphicon";
import {SpecialAbilities} from "../constantLists/SpecialAbilities";

export const AstronautListRow = (props) =>
    <tr>
        <td>
            {props.name}
        </td>
        <td>
            {props.surname}
        </td>
        <td>
            {(new Date(props.birthDate)).toLocaleDateString()}
        </td>
        <td>
            {SpecialAbilities.names[props.ability]}
        </td>
        <td>
            <Button bsStyle="default" onClick={() => props.edit(props._id)}><Glyphicon glyph="edit"/></Button>
            <Button bsStyle="danger" onClick={() => props.remove(props._id)}><Glyphicon glyph="remove"/></Button>
        </td>
    </tr>

