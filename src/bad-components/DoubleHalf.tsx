import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoublerProps {
    doDouble: () => void;
}
function Doubler({ doDouble }: DoublerProps): React.JSX.Element {
    return <Button onClick={doDouble}>Double</Button>;
}

interface HalverProps {
    doHalve: () => void;
}
function Halver({ doHalve }: HalverProps): React.JSX.Element {
    return <Button onClick={doHalve}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    const doubleVal = () => {
        setDhValue(dhValue * 2);
    };
    const halfVal = () => {
        setDhValue(dhValue * 0.5);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler doDouble={doubleVal}></Doubler>
            <Halver doHalve={halfVal}></Halver>
        </div>
    );
}
