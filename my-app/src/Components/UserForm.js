import React from 'react'

const UserForm = ({
  user,
  addUser,
  onValueChange,
}) => (
  <div className="row new-user-form">
    <div className="col-xs-3 form-group">
      <input name="name" type="text" placeholder="Full name" className="form-control form-element" value={user.name} onChange={e => onValueChange(e)} />
    </div>
    <div className="col-xs-3 form-group">
      <input name="email" type="email" placeholder="E-mail address" className="form-control form-element" value={user.email} onChange={e => onValueChange(e)} />
    </div>
    <div className="col-xs-3 form-group">
      <input name="phone" type="number" placeholder="Phone number" className="form-control form-element" value={user.phone} onChange={e => onValueChange(e)} />
    </div>
    <div className="col-xs-3">
      <button type="button" className="btn add-button pull-right" onClick={addUser}>Add User</button>
    </div>
  </div>
)

export default UserForm
