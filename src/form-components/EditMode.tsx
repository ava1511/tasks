import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    const notEditMode = (
        <div>
            {name} is {isStudent ? "a student" : "not a student"}.
        </div>
    );

    const editForm = (
        <div>
            <Form.Group controlId="editName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" value={name} onChange={updateName} />
            </Form.Group>
            <Form.Check
                type="checkbox"
                id="isStudent"
                label="Student?"
                checked={isStudent}
                onChange={updateStudent}
            />
        </div>
    );

    return (
        <div>
            <h3>Edit Mode</h3>

            {editMode ? editForm : notEditMode}

            <Form.Check
                type="switch"
                id="editMode"
                label="Edit Mode"
                checked={editMode}
                onChange={updateMode}
            />
        </div>
    );
}
