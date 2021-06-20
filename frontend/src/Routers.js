import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import HomePage from './pages/home';
import ContactPage from './pages/contact'
import AboutPage from './pages/contact';
import NotFoundPage from './pages/404';
import LayoutWebsite from './layouts/website';
import LayoutAdmin from './layouts/admin';
import ProductDetailPage from './pages/product-detail';
import AdminProductPage from './pages/admin/product';
import AdminProductAddPage from './pages/admin/product/add';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp';
// import Header from './crore/heade';
import  AddCategoryPage from './pages/admin/category/add'
import Header from './comporents/Header';
import AdminCategoryPage from './pages/admin/category/index';
import EditCategoryPage from './pages/admin/category/edit'
import EditProductPage from './/pages/admin/product/edit'
import UserDashboard from './user/userDashboard';
import PrivateRoute from './auth/privateRoute';
import AdminRoute from './auth/adminRoute';
import AdminDashboard from './user/adminDashboard';
import AdminContactPage from './pages/admin/contact/index'
import CategoryProductPage from './pages/admin/CategoryProductPage';
import AllProducts from './comporents/allproduct'
const Routers = (props) => {
    return (
        <>
            <Router>
             
                <Switch>


                    <Route exact path="/admin/:path?/:path?">
                        <LayoutAdmin>
                            <Switch>
                              
                                <Route exact path="/admin/product">
                                    <AdminProductPage {...props} />
                                </Route>
                                <Route exact path="/admin/contact">
                                    <AdminContactPage {...props} />
                                </Route>
                                
                                <AdminRoute exact path="/admin/dashboard">
                                    <AdminDashboard />
                                </AdminRoute>
                                <Route exact path="/admin/category">
                                   <AdminCategoryPage {...props} />
                                </Route>
                                <Route exact path="/admin/user">
                                    User
                                </Route>
                                <Route exact path="/admin/category/add">
                                    <AddCategoryPage  {...props} />
                                </Route>
                                <Route exact path="/admin/category/:id">
                                   <EditCategoryPage {...props} />
                                </Route>
                                <Route exact path="/admin/product/add">
                                    <AdminProductAddPage {...props} />
                                </Route>
                                <Route exact path="/admin/product/:id">
                                   <EditProductPage {...props} />
                                </Route>
                            </Switch>
                        </LayoutAdmin>
                    </Route>
                    <Route>
                        <LayoutWebsite >
                           <Header />
                            <Switch>
                                <Route exact path="/">
                                    <HomePage {...props} />
                                </Route>
                                <Route exact path="/product">
                                    <AllProducts {...props} />
                                </Route>
                                <Route exact path="/category/:id">
                                    <CategoryProductPage {...props} />
                                </Route>
                                <Route exact path="/contact">
                                    <ContactPage {...props} />
                                </Route>
                                <Route path="/product/:id">
                                    <ProductDetailPage />
                                </Route>
                                <Route exact path="/signin">
                                    <SignIn />
                                </Route>
                                <PrivateRoute exact path="/user/dashboard">
                                    <UserDashboard />
                                </PrivateRoute>
                                
                                <Route exact path="/signup">
                                    <SignUp />
                                </Route>
                                <Route exact path="*">
                                    <NotFoundPage />
                                </Route>
                                <Route exact path="*">
                                    <NotFoundPage />
                                </Route>
                               
                    

                            </Switch>
                        </LayoutWebsite>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Routers
