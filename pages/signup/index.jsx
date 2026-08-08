import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const SignUp = () => {

    const searchParams = useSearchParams();
    const navigate = useRouter();

    const redirect = searchParams.get('redirect');

    let signinUrl = "/signin";

    if (redirect){

        if (redirect === 'cart'){
            signinUrl = "/signin?redirect=cart";
        }
    }

    const [error, setError] = useState("");
    const [activeError, setActiveError] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [formData, setFormData] = useState({
        firstname: "",
        email: "",
        password1: "",
        password2: "",
        lastname: "",
        checkbox: false,
    })

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    useEffect(() => {
        if (activeError === false){
            setActiveError(false);
        }else{
            setActiveError(true);
        }
    },[activeError])

    const formSubmitted = async (e) => {

        e.preventDefault();

        let nameVal = /^[a-zA-Z]+$/;
        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let hasLetters = /[a-zA-Z]/;
        let hasNum = /[0-9]/;

        if (formData.firstname === "" ||
            formData.email === "" ||
            formData.password1 === "" ||
            formData.password2 === "" ||
            formData.lastname === ""
        ){
            setActiveError(true);
            setError("All fields are required");
            return;
        }else{
            setActiveError(false);
        }

        if (!nameVal.test(formData.firstname)){
            setActiveError(true);
            setError("Invalid name format");
            return;
        }else{
            setActiveError(false);
        }

        if (!nameVal.test(formData.lastname)){
            setActiveError(true);
            setError("Invalid name format");
            return;
        }else{
            setActiveError(false);
        }

        if (!emailVal.test(formData.email)){
            setActiveError(true);
            setError("Invalid email address");
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
            setBtnClicked(true);

            try{
                let url = "https://backend.iruhost.com/api/register";

                const response = await axios.post(url, formData, {
                    headers: {
                        "Content-Type" : "application/json",
                    },withCredentials: true
                })

                const {status, message} = response.data;

                if (status === 'error') {
                    setActiveError(true);
                    setError(message);
                    setBtnClicked(false);
                } 
                
                if (status === 'success'){
                    setActiveError(false);
                    setError("");
                    
                    if (redirect === 'cart'){
                        window.AbortController.location = '/cart';
                    }else{
                        window.location = '/';
                    }
                }

            }catch(err){
                console.log("Error: ", err);
                setActiveError(true);
                setError("Check your internet connection and try again");
            }
        } 
    }

    return ( 
        <>
        <Head>
            <title>Sign Up - IruHost</title>
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
                            <label htmlFor="firstname" className="text-grey mb-4">Firstname:</label>
                            <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded px-2 bg-transparent" />
                            <div className="text-danger"></div>
                        </div>
                        <div className="w-full h-max mb-2.5">
                            <label htmlFor="lastname" className="text-grey mb-4">Lastname:</label>
                            <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded px-2 bg-transparent" />
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
                            <label htmlFor="checkbox" className="text-grey">By checking this box, you agree to our <Link href="/terms-of-service" className="text-primary hover:underline transition duration-300 ease-in-out">terms and conditions</Link> and <Link href="/privacy-policy" className="text-primary hover:underline transition duration-300 ease-in-out">privacy policy</Link>.</label>
                        </div>
                    </div>
                    <div className="h-max w-full py-2 5">
                        <button onClick={formSubmitted} className="w-full h-10 flex items-center justify-center bg-btns text-text rounded bg-primary">{
                            btnClicked ? (
                                <img src="/loading.gif" alt="loading image" className="h-5 w-5" />
                            ) : (
                                <span>Sign In</span>
                            )
                    }</button>
                    </div>
                    <div className="text-grey">
                        Already have an account? <Link href={signinUrl} className="text-primary hover:underline transition duration-300 ease-in-out">Sign In</Link>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default SignUp;