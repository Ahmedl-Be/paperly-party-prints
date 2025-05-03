
import React from "react";

const EditorPreview = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-xl border border-gray-100">
      {/* Editor interface preview */}
      <div className="bg-white p-4">
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-700 font-medium">
            Design Mode
          </div>
        </div>
        
        {/* Split view */}
        <div className="flex">
          {/* Left side - controls */}
          <div className="w-1/3 border-r pr-3">
            <div className="space-y-3">
              {/* Tabs */}
              <div className="flex border-b">
                <div className="px-3 py-2 text-xs font-medium text-purple-600 border-b-2 border-purple-600">Templates</div>
                <div className="px-3 py-2 text-xs font-medium text-gray-500">Text</div>
                <div className="px-3 py-2 text-xs font-medium text-gray-500">Style</div>
              </div>
              
              {/* Template thumbnails */}
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-[5/7] bg-purple-100 rounded-md border-2 border-purple-500"></div>
                <div className="aspect-[5/7] bg-blue-50 rounded-md"></div>
                <div className="aspect-[5/7] bg-pink-50 rounded-md"></div>
                <div className="aspect-[5/7] bg-green-50 rounded-md"></div>
              </div>
              
              {/* Color picker preview */}
              <div className="pt-2">
                <div className="mb-2 text-xs font-medium text-gray-700">Background Color</div>
                <div className="flex space-x-1">
                  <div className="w-6 h-6 bg-purple-200 rounded-full ring-2 ring-purple-500"></div>
                  <div className="w-6 h-6 bg-pink-200 rounded-full"></div>
                  <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
                  <div className="w-6 h-6 bg-green-200 rounded-full"></div>
                  <div className="w-6 h-6 bg-yellow-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - card preview */}
          <div className="w-2/3 pl-3 flex justify-center">
            <div className="aspect-[5/7] w-full max-w-[180px] bg-purple-100 rounded-md shadow-sm p-4 flex flex-col items-center justify-center text-center">
              <div className="absolute top-2 right-2 text-2xl opacity-10">🎂</div>
              <div className="absolute bottom-2 left-2 text-2xl opacity-10">🎈</div>
              <h3 className="text-sm font-bold mb-2">Birthday Party!</h3>
              <p className="text-xs">Join us for John's 30th birthday celebration on Saturday, June 10th at 7 PM</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default EditorPreview;
