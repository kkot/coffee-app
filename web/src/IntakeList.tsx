import React from 'react';
import {getIntakes} from "./api/intakeApi";
import moment from "moment";
import {getBeverageForId} from "./api/beverageApi";

function IntakeList() {

    let intakes = getIntakes();

    return <>
        <h1>List</h1>
        <table>
            {intakes.map(intake => <tr>
                <td>{getBeverageForId(intake.beverageId).name}</td>
                <td>{moment(intake.datetime).format()}</td>
            </tr>)}
        </table>
    </>
}

export default IntakeList
