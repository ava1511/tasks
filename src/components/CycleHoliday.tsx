import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*Halloween, Christmas, Thanksgiving, Fourth of July, Easter*/
type Holiday = "🎃" | "🎄" | "🦃" | "🎆" | "🐰";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    function makeAlphabetical(): void {
        setHoliday(
            holiday === "🎄" ? "🐰"
            : holiday === "🐰" ? "🎆"
            : holiday === "🎆" ? "🎃"
            : holiday === "🎃" ? "🦃"
            : "🎄",
        );
    }

    function makeChronological(): void {
        setHoliday(
            holiday === "🐰" ? "🎆"
            : holiday === "🎆" ? "🎃"
            : holiday === "🎃" ? "🦃"
            : holiday === "🦃" ? "🎄"
            : "🐰",
        );
    }

    return (
        <div>
            <Button onClick={makeAlphabetical}>Advance By Alphabet</Button>
            <Button onClick={makeChronological}>Advance By Year</Button>
            Holiday: {holiday}
        </div>
    );
}
