import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Infoblock({heading}) {
  return (
  <section className="bg-theme my-5 py-4">
    <div className="container">
      <Heading title={heading}/>
      <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-white mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, consequatur corporis cupiditate dolor dolorum, fugiat fugit necessitatibus, nisi optio quasi rerum sapiente. Accusamus adipisci aliquid, deleniti dolores eum excepturi hic id nesciunt nihil officia officiis optio, perferendis quae sunt vel? Aliquid atque dolore ea eligendi error esse illo inventore nesciunt numquam optio repellendus saepe, sunt voluptatem! Beatae dolor officiis ratione.
          </p>
          <Link to="/about/">
            <button className="btn btn-warning btn-lg">
              {heading}
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}