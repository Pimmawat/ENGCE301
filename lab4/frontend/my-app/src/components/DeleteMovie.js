import React from 'react'


const DeleteMovie = ({ onChangeForm, deleteMovie }) => {


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>DeleteMovie</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="delete_movie" id="delete_movie" placeholder="MovieName" />
                            </div>

                        </div>
                        <button type="button" onClick={(e) => deleteMovie()} className="btn btn-danger">delete</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default DeleteMovie
