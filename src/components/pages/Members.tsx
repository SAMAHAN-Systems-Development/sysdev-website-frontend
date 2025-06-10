import React from "react";
import { MembersMeetTheTeamSection } from "../sections/MembersMeetTheTeamSection";
export interface MembersPageProps {
  currentDepartment: string;
  setCurrentDepartment: React.Dispatch<React.SetStateAction<string>>;
}

const MembersPage: React.FC<MembersPageProps> = ({
  currentDepartment,
  setCurrentDepartment,
}) => {
  return (
    <div>
      <MembersMeetTheTeamSection
        currentDepartment={currentDepartment}
        setCurrentDepartment={setCurrentDepartment}
      />
    </div>
  );
};

export default MembersPage;