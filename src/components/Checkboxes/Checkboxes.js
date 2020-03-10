import React from 'react';

const Checkboxes = () => {
  return (
    <div className="form-group">
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="check1" />
        <label className="custom-control-label" htmlFor="check1">Name</label>
      </div>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="check2" />
        <label className="custom-control-label" htmlFor="check2">Country</label>
      </div>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="check3" />
        <label className="custom-control-label" htmlFor="check3">Job</label>
      </div>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="check4" />
        <label className="custom-control-label" htmlFor="check4">Last salary</label>
      </div>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="check5" />
        <label className="custom-control-label" htmlFor="check5">Date of application</label>
      </div>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="check6" />
        <label className="custom-control-label" htmlFor="check6">Expirience in JS</label>
      </div>
    </div>
  );
}

export default Checkboxes;
