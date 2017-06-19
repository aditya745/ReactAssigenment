import React from 'react'

const UserRow = ({userId, name, email, phone, deleteUser}) => (
  <div className="row user-row">
    <div className="col-xs-4 col-sm-3">
      {name}
    </div>
    <div className="col-xs-4 col-sm-3">
      {email}
    </div>
    <div className="col-xs-4 col-sm-3">
      {phone}
    </div>
    <div className="hidden-xs col-sm-1 action-link">
      <span className="glyphicon glyphicon-pencil pull-right" />
    </div>
    <div className="hidden-xs col-sm-2 action-link">
      <span data-id={userId} className="glyphicon glyphicon-trash pull-right" onClick={deleteUser} />
    </div>
  </div>
)

export default UserRow
