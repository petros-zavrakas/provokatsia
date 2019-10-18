import React from "react";
import Image from "../../common/components/image/Image";
import { MemberCont, Photo, Details } from "./Member.styles";

const Member = ({ member }) => {
  return (
    <MemberCont>
      <Photo>
        <Image name={member.id} label={"team member " + member.name} />
      </Photo>
      <Details>
        <h3>{member.name}</h3>
        <span>Member since: <span>{member.since}</span></span>
        <span>Role: <span>{member.role}</span></span>
        <p>{member.bio}</p>
      </Details>
    </MemberCont>
  );
};

export default Member;
