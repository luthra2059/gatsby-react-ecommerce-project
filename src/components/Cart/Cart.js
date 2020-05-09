import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image'

export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: props.products.edges,

        }
    }
    render() {
        
        return (
            <section>
                <div className="container">
                    <Heading title="Products"/>
                    <div className="row">
                    <div className="col-12 mx-auto">
                        {this.state.products.map(({node})=>{
                            return(
                                <div key={node.id} className="col-11 col-md-6 d-flex mx-auto mb-5">
                                <Img fixed={node.media.fixed}/>
                                    <div className="flex-row-1 px-3">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-0">{node.title}</h6>
                                            <h6 className="mb-0 ml-5 text-success">$ {node.price}</h6>
                                        </div>
                                        <p className="text-muted">
                                            <small>{node.description.description}</small>
                                        </p>
                                        <button 
                                        data-item-id={node.id}
                                        data-item-name={node.title}
                                        data-item-price={node.price}
                                        data-item-url="shubhamluthraecom.netlify.com/"
                                        data-item-image={node.media.fixed.src}
                                        className="btn btn-warning snipcart-add-item"
                                        
                                        
                                        >Buy Now</button>
                                    </div>
                                </div>
                            )
                        })}</div>
                    </div>
                </div>
            </section>
        )
    }
}
