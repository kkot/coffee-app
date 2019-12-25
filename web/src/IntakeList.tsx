import React from 'react';
import {getIntakes} from "./api/intakeApi";

function IntakeList() {

    let intakes = getIntakes();

    return <>
        <h1>List</h1>
        <table>
            {intakes.map(intake => <tr>
                <td>{intake.beverageId}</td>
                <td>{""+intake.datetime}</td>
            </tr>)}
        </table>
    </>
}

export default IntakeList
