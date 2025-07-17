import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {

    const [error, setError] = useState("");
    const [activeError, setActiveError] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password1: "",
        password2: "",
        checkbox: false,
    })

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    const formSubmitted = async (e) => {

        e.preventDefault();

        let nameVal = /^[a-zA-Z|| ]+$/;
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let hasLetters = /[a-zA-Z]/;
        let hasNum = /[0-9]/;

        if (formData.fullname === "" ||
            formData.email === "" ||
            formData.password1 === "" ||
            formData.password2 === ""
        ){
            setActiveError(true);
            setError("All fields are required");
            return;
        }else{
            setActiveError(false);
        }

        if (!nameVal.test(formData.fullname)){
            setActiveError(true);
            setError("Name must be only letters and spaces");
            return;
        }else{
            setActiveError(false);
        }

        if (!emailVal.test(formData.email)){
            setActiveError(true);
            setError("Inalid email address");
            return;
        }else{
            setActiveError(false);
        }

        if (formData.password1.length < 8){
            setActiveError(true);
            setError("Password must be atlease 8 characters long");
            return;
        }else{
            if (!hasLetters.test(formData.password1)){
                setActiveError(true);
                setError("Password must contain at least a letter");
                return;
            }else{
                if (!hasNum.test(formData.password1)){
                    setActiveError(true);
                    setError("Password must contain at least a number");
                    return;
                }else{
                    setActiveError(false);
                }
            }
        }

        if (formData.password1 !== formData.password2){
            setActiveError(true);
            setError("Passwords do not match");
            return;
        }else{
            setActiveError(false);
        }

        if (!formData.checkbox){
            setActiveError(true);
            setError("Agree to terms and conditions");
            return;
        }else{
            setActiveError(false);
        }

        if (activeError === false){
            try{
                let url = "http://localhost:5006/sign-up";

                const response = await axios.post(url, formData, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })
                console.log(response.data);
            }catch(err){
                console.log("Error: ", err);
                setActiveError(true);
                setError("Check your internet connection and try again");
            }
        }
    }

    useEffect(() => {
        if (activeError === false){
            setActiveError(false);
        }else{
            setActiveError(true);
        }
    },[activeError])

    return ( 
        <>
        <Head>
            <title>Sign In - Ossil Tech LTD</title>
            <style>{`
                #header,
                #footer {
                    display: none;
                }
            `}</style>
        </Head>
        <section className="w-screen h-screen flex bg-background">
            <div className="hidden sm:block w-3/5 h-full">
                <img src="/signup.jpg" alt="" className="w-full h-full" />
            </div>
            <div className="w-full sm:w-2/5 h-full flex justify-center items-center">
                <form onSubmit={formSubmitted} className="w-4/5 h-max"> 
                    <header className="mb-2.5">
                        <h2 className="text-accent text-3xl font-semibold">Sign Up</h2>
                    </header>
                    <div id="error" className={`bg-danger text-center text-accent py-2 px-4 rounded w-full h-max mb-2
                        ${activeError ? "block" : "hidden"}
                        `}>
                        {error}
                    </div>
                    <div className="w-full h-max">
                        <div className="w-full h-max mb-2.5">
                            <label htmlFor="fullname" className="text-grey mb-4">Fullname:</label>
                            <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded px-2 bg-transparent" />
                            <div className="text-danger"></div>
                        </div>
                        <div className="w-full h-max mb-2.5">
                            <label htmlFor="email" className="text-grey mb-4">Email Address:</label>
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded px-2 bg-transparent" />
                            <div className="text-danger"></div>
                        </div>
                        <div className="w-full h-max mb-2.5">
                            <label htmlFor="password" className="text-grey mb-4">Password:</label>
                            <input type="password" id="password" name="password1" value={formData.password1} onChange={handleChange} className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded px-2 bg-transparent" />
                            <div className="text-danger"></div>
                        </div>
                        <div className="w-full h-max mb-2.5">
                            <label htmlFor="confirm-password" className="text-grey mb-4">Confirm Password:</label>
                            <input type="password" id="confirm-password" name="password2" value={formData.password2} onChange={handleChange} className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded px-2 bg-transparent" />
                            <div className="text-danger"></div>
                        </div>
                        <div className="w-full h-max">
                            <input type="checkbox" name="checkbox" value={formData.checkbox} onChange={handleChange} className="mr-1" id="checkbox" />
                            <label htmlFor="checkbox" className="text-grey">By checking this box, you agree to our <Link href="/" className="text-primary hover:underline transition duration-300 ease-in-out">terms and conditions</Link> and <Link href="/" className="text-primary hover:underline transition duration-300 ease-in-out">privacy policy</Link>.</label>
                        </div>
                    </div>
                    <div className="h-max w-full py-2 5">
                        <button className="w-full py-2 5 bg-primary text-text rounded">Sign Up</button>
                    </div>
                    <div className="text-grey">
                        Already have an account? <Link href="/sign-in" className="text-primary hover:underline transition duration-300 ease-in-out">Sign In</Link>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default SignUp;