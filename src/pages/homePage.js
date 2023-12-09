import { useEffect } from "react";
import { useData } from "../components/context/DataContext";
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    useEffect(()=>{
            if(!user){
                navigate("/")
            }
    })



    return (

        <>
            <span>

                <div class="header">
                    <h1>Home Page</h1>
                </div>
                <div class="navbar">
                    <a href="">Reset Password</a>
                    <a href="">Logout</a>
                </div>

                <div class="main-content">
                    <div class="dashboard-section" id="home">
                        <h2 class="section-title">Hii {user.username}</h2>
                        <p>Your Email : user.email</p>
                    </div>

                   
                </div>

            </span>


        </>
    )

}
export default Home;