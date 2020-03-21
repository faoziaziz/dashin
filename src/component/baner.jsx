/* 
   This code for react application 
*/

import React from 'react';
import { Jumbotron, Button } from 'reactstrap';


const Baner = (props) => {
  return (
    <div>
      <Jumbotron>
          <h1 className="display-3">Halo, Semua!</h1>
        <p className="lead">Kerja untuk kebebasan.</p>
        <hr className="my-2" />
          <p>Untuk teknology yang aman, menjunjung privasi, gratis, transparan dan bisa dimodifikasi.</p>
	  <p className="lead">
          <Button color="primary">Learn More</Button>
	  </p>
      </Jumbotron>
    </div>
  );
};

export default Baner;
