"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import MembersPage from "@/components/pages/Members";

function Page() {
  const searchParams = useSearchParams();
  const [currentDepartment, setCurrentDepartment] = useState("Officers");

  useEffect(() => {
    const dept = searchParams.get("department");
    setCurrentDepartment(dept || "Officers");
  }, [searchParams]);

  return (
    <div>
      <MembersPage currentDepartment={currentDepartment} setCurrentDepartment={setCurrentDepartment} />
    </div>
  );
}

export default Page;