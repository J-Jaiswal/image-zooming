import React from "react";
import SlideViewer from "./components/SlideViewer";
import DetailsPanel from "./components/DetailsPanel";
import HubView from "./components/HubView";

function App() {
  return (
    <div className="flex w-full m-4 bg-slate-900 rounded-2xl border-[2px] p-4">
      <div className="w-4/5 relative">
        <SlideViewer />
        <div className="absolute top-0 right-0 w-1/4 h-1/4 mr-4">
          <HubView />
        </div>
      </div>

      <div className="w-1/4 bg-gray-100 p-4">
        <DetailsPanel />
      </div>
    </div>
  );
}

export default App;
