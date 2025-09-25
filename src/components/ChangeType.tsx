import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function flipType(): void {
        if (type === "short_answer_question")
            setType("multiple_choice_question");

        if (type === "multiple_choice_question")
            setType("short_answer_question");
    }

    let text = "";
    if (type === "short_answer_question") {
        text = "Short Answer";
    } else {
        text = "Multiple Choice";
    }

    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {text}
        </div>
    );
}
