import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import slideImage from "../assets/wsi.png";

const SlideViewer = () => {
  return (
    <div className="p-2 h-full flex flex-col items-center justify-center">
      <TransformWrapper initialScale={1} minScale={0.5} maxScale={12}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Zoom controls */}
            <div className="flex space-x-4 mb-4">
              <button
                className=" rounded-xl bg-slate-600 hover:bg-slate-700 text-white px-4 py-2"
                onClick={() => zoomIn()}
              >
                Zoom In
              </button>
              <button
                className="rounded-xl bg-slate-600 hover:bg-slate-700 text-white px-4 py-2"
                onClick={() => zoomOut()}
              >
                Zoom Out
              </button>
              <button
                className="rounded-xl bg-slate-600 hover:bg-slate-700 text-white px-4 py-2"
                onClick={() => resetTransform()}
              >
                Reset
              </button>
            </div>

            {/* Transformable component */}
            <TransformComponent>
              <img
                src={slideImage}
                alt="Whole Slide Image"
                className="w-full h-auto" // Ensure image scales properly
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default SlideViewer;
