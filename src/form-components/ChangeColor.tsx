import React, { useState } from "react";
import { Form } from "react-bootstrap";
// import { ColoredBox } from "../bad-components/ColoredBox";

export function ChangeColor(): React.JSX.Element {
    const boxColors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "brown",
    ];
    const defaultColor = boxColors[0];
    const [color, setColor] = useState<string>(defaultColor);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="boxColors">
                <Form.Label>Select a color:</Form.Label>

                {boxColors.map((optionColor: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        key={optionColor}
                        label={
                            <span
                                style={{
                                    backgroundColor: optionColor,
                                }}
                            >
                                {optionColor}
                            </span>
                        }
                        value={optionColor}
                        checked={color === optionColor}
                    ></Form.Check>
                ))}
            </Form.Group>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px",
                }}
            >
                {color}
            </div>

            <p>
                You have chosen:
                <span
                    style={{
                        backgroundColor: color,
                    }}
                >
                    {color}.
                </span>
            </p>
        </div>
    );
}
