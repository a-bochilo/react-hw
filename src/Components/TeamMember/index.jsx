import React from "react";

const TeamMember = ({ avatar, name, city }) => {
  return (
    <div className="team-member col-12 col-sm-4 container">
      <div className="row">
        <div className="row">
          <img src={avatar} alt="avatar" className="col-12" />
          <p className="col-12 team-member__name text-center">
            {name.firstname} {name.lastname}
          </p>
          <p className="col-12 team-member__city text-center">{city}</p>
          <div className="col-12 team-member__links-holder">
            <div className="col-3 team-member__link"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
