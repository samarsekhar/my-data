let Login = () => {
    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <form className="">
                        <div className="form-group">
                            <input className="form-control" placeholder="Please Enter Email" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Please Enter Password" />
                        </div>
                        <button className="btn btn-primary mr-3"> Email</button>
                        <button className="btn btn-warning"> Reset</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Login;