import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMembers } from "./teamActions";
import PageHeader from "../../common/components/page-header/PageHeader";
import Member from "./Member";

export const Team = props => {
  const { members } = props;

  useEffect(() => {
    props.fetchMembers();
  }, []);

  return (
    <div data-test="teamComponent">
      <PageHeader header="The Team">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        vestibulum ut augue id malesuada. Aliquam blandit tellus in ipsum
        porttitor suscipit team.
      </PageHeader>
      <ul data-test="teamMembersList">
        {members.map(member => (
          <Member key={member.id} member={member} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  members: state.teamMembers
});

export default connect(
  mapStateToProps,
  { fetchMembers }
)(Team);
