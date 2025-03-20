import { useEffect } from "react";

const EzmobAds = () => {
    useEffect(() => {
        window.adk_pdisp = {
            h: "xml.qualiclicks.com",
            f: 768465,
            a: "lkmg",
            ps: [1],
            cin: 4,
            s: "",
            q: [],
            t: 1,
        };

        const script = document.createElement("script");
        script.src = "//static.ezmob.com/tabu/display.js";
        script.async = true;
        document.getElementById("ad-container")?.appendChild(script);
    }, []);

    return <div
        id="ad-container"
        style={{
            width: "100px",
            height: "100px",
            position: "fixed",
            bottom: "50%",
            right: "10px",
            overflow: "hidden",
            boxSizing: "border-box"
        }}
    />;
};

export default EzmobAds;
