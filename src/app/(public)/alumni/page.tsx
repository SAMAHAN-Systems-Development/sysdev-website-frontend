"use client";

import React, { useEffect, Suspense } from "react";
import Alumni from "@/components/pages/Alumni";

function AlumniWrapper() {
  return <Alumni />;
}

export default function AlumniPage() {
  useEffect(() => {
    document.title = "Alumni";
  }, []);

  return (
    <Suspense fallback={<div>Loading alumni...</div>}>
      <AlumniWrapper />
    </Suspense>
  );
}
