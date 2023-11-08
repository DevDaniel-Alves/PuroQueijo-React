

function NotFound() {
    return (
        <>
            <div className="container text-center">
                <div className="d-flex align-items-center flex-column ">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"><span className="text-danger">Opps!</span>Page Not Found </p>
                    <p className="lead">The page you’re looking for doesn’t exist.</p>
        
                </div>
                <button type="button" class="btn btn-primary btn-lg">Go Home</button>
            </div>
           
        </>
    )

}

export default NotFound