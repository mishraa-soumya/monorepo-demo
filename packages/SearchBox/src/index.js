import * as React from "react";
import Button from "Button";
import TextBox from "TextBox";

const SearchBox = () => {
    return (
        <div>
            <TextBox
                placeholder="Enter the text to search"
                type="text"
            />
            <Button>Search</Button>
        </div>
    )
}
