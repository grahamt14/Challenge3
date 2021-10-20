import React from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  var countrycodedict = {
    'United States': 'us'
    // ... fill in
};

const CountryCode = user['https://example.com/geoip'].country_code; 
//const CountryCode = "us"
const check = "https://lipis.github.io/flag-icon-css/flags/4x3/"+CountryCode+".svg";
const test = check.toLowerCase();

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <h2><img
            src={user.picture}
            alt="Picture"
          /></h2>
          <h2>{user['https://example.com/country']}</h2>
          <h2>{user['https://example.com/geoip'].country_code}</h2>
    
          <h2><img
            class="image2"
            src={test}
            alt="Picture"
            width="80"
            height="80"
          /></h2>
        
          
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
    </Container>
  
  );
};

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
