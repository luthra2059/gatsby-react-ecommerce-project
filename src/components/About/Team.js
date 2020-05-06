import React from "react"

export default function Team() {
  return (
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto">
        <div className="card-group">
          <div className="card">
            <img className="card-img-top" src="https://images.pexels.com/photos/4277020/pexels-photo-4277020.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="https://images.pexels.com/photos/2647053/pexels-photo-2647053.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}