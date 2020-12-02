import React from "react";

function Form(prop){
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="search">
                        <h2>Search for and save Books of Interest</h2>
                    </label>
                    <input
                        onChange={prop.handleInputChange}
                        value={prop.search}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search for a Book"
                        id="search"
                    />
                    <button onClick={prop.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;