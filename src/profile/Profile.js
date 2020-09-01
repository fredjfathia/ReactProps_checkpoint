import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
return (
    <div>
       <h1><i>{props.fullName}</i></h1> 
       <h4>{props.bio}</h4>
       <h2><i>{props.profession}</i></h2>
 </div>
)};
Profile.propTypes = {
    fullName :PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
};
Profile.defaultProps = {
fullName:"Fredj Fathia" ,
bio: "30/12/1992",
profession : "Ingénieur informatique"
};

export default Profile;