import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    const requestedToNum = parseInt(attemptsRequested);

    let buttonDisabled = false;
    if (attemptsLeft === 0) buttonDisabled = true;

    return (
        <div>
            <Form.Group controlId="requestedAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAttemptsRequested(event.target.value);
                    }}
                />
            </Form.Group>
            <h3>Give Attempts</h3>
            <div>
                <p>Current # of attempts: {attemptsLeft}</p>

                <div>
                    <Button
                        disabled={buttonDisabled}
                        onClick={() => {
                            setAttemptsLeft(attemptsLeft - 1);
                        }}
                    >
                        Use
                    </Button>

                    <Button
                        onClick={() => {
                            if (!isNaN(requestedToNum)) {
                                setAttemptsLeft(attemptsLeft + requestedToNum);
                            }
                        }}
                    >
                        Gain
                    </Button>
                </div>
            </div>
        </div>
    );
}
