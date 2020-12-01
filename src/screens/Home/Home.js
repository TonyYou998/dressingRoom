import React, { Component } from 'react'
import CategoriesComponent from '../../Components/Categories/Categories'
import HeaderComponents from '../../Components/Layout/Header/Header'
import ModelComponent from '../../Components/Model/Model'
import ProductsComponents from '../../Components/Products/products'



export default class HomeComponent extends Component {
    render() {
        return (
            <div className="container-fluid" >
                <HeaderComponents/>
                <div className="row">
                        <div className="col-6">
                            <div>
                                <CategoriesComponent/>
                                <ProductsComponents/>
                            </div>
                          
                        </div>
                        <div className="col-6">
                            <ModelComponent/>
                        </div>
                </div>
                   

               
            </div>
        )
    }
}
