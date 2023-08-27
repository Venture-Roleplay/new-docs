import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    React.useEffect(() => {
        window.location.href = "/docs/welcome";
    }, []);
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        ></Layout>
    );
}
