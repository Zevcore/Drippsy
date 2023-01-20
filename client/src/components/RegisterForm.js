export default function RegisterForm() {
    return (
        <form className="container w-50 border p-5">
            <h1>Drippsy <span className="text-muted display-6">[ register ]</span></h1>
            <hr/>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">First name</label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="surname" className="form-label">Last name</label>
                <input type="text" className="form-control" id="surname" />
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date of birth</label>
                <input type="date" className="form-control" id="date" />
            </div>
            <div className="d-flex">
                <div className="mb-3 me-1">
                    <label htmlFor="street" className="form-label">Street</label>
                    <input type="text" className="form-control" id="street" />
                </div>
                <div className="mb-3">
                    <label htmlFor="street_number" className="form-label">Number</label>
                    <input type="text" className="form-control" id="street_number" />
                </div>
            </div>
            <div className="d-flex">
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" />
                </div>
                <div className="mb-3">
                    <label htmlFor="postal_code" className="form-label">Postal code</label>
                    <input type="text" className="form-control" id="postal_code" />
                </div>
            </div>
            <button type="submit" className="btn btn-success w-50">Sign in</button>
            <button type="submit" className="btn btn-dark w-25 m-3">Submit</button>
        </form>
    )
}
