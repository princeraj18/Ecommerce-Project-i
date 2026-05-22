import React from "react";

function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center text-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
      <h2 className="mt-5 text-2xl font-bold">Loading your experience</h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
        Please wait while we prepare the storefront and bring everything into view.
      </p>
    </div>
  );
}

export default Loading;
