export default function LoginForm() {
    return (
        <form className="container w-50 border p-5">
            <h1>Drippsy <span className="text-muted display-6">[ login ]</span></h1>
            <hr/>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-dark w-50">Submit</button>
            <button type="submit" className="btn btn-success m-3 w-25">Sign in</button>
        </form>
    )
}
