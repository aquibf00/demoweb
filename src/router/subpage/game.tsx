import { Link } from "react-router-dom"

export const GameScreen = () => {
    return <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-white text-3xl akaya-telivigala-regular text-center">
            This page will be revealed at launch time.
        </div>
        <Link to='/' className="btn btn-lg btn-link akaya-telivigala-regular text-white">
            Back to Home
        </Link>
    </div>
}