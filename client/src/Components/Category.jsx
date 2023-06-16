import { NavLink } from "react-router-dom"
import Button from "./button"
import Form from "./form";
import { useState } from "react";

const Categories = () => {
    const [getForm, setGetForm] = useState(false);

    const toggleForm = () => {
        setGetForm(!getForm)
    }

    return (
        <>
        <div>
            <h3>Categories</h3>
            <div className="categoriesContainer">
                <div>
                <NavLink to="/">All</NavLink>
                <NavLink to="/custom">Custom</NavLink>
                <NavLink to="/icp">ICP</NavLink>
                <NavLink to="/mission">Mission</NavLink>
                <NavLink to="/product">Product</NavLink>
                </div> 
                <Button data={{title: "Add Topic", onclick: toggleForm}}/>
            </div>
        </div>
        {getForm && <Form/>}
        </>
    )
}

export default Categories