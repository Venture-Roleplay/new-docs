import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function IndexLinkList(props: Props) {
    return (
        // grid with max of 3 columns
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
            {props.children}
        </div>
    );
}
