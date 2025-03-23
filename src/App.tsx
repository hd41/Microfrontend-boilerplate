import React, { Suspense, lazy } from "react";
const MicroApp1 = lazy(() => import("microApp1/App"));
const MicroApp2 = lazy(() => import("microApp2/App"));

function App() {
    return (
        <div>
            <h1>Host Application</h1>
            <Suspense fallback={<div>Loading MicroApp1...</div>}>
                <MicroApp1 />
            </Suspense>
            <Suspense fallback={<div>Loading MicroApp2...</div>}>
                <MicroApp2 />
            </Suspense>
        </div>
    );
}

export default App;