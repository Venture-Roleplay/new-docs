import React from "react";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
    React.useEffect(() => {
        window.location.href = "/docs/welcome";
    }, []);
    return (
        <Layout
            title={`Venture Roleplay - Documentation`}
            description="Find all the information you need to know about Venture Roleplay with our documentation!"
        ></Layout>
    );
}
