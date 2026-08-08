import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Signin = () => {

    const searchParams = useSearchParams();

    let signupUrl = "/signup";
    let forgetUrl = "/forget-password";

    const redirect = searchParams.get('redirect');

    if (redirect){

        if (redirect === 'cart'){
            signupUrl = "/signup?redirect=cart";
            forgetUrl = "/forget-password?redirect=cart";
        }
    }

    const [error, setError] = useState("");
    const [activeError, setActiveError] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [formData, setFormData] = useState({
        email : '',
        password : '',
    })

    useEffect(() => {
        if (activeError === false){
            setActiveError(false);
        }else{
            setActiveError(true);
        }
    },[activeError])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value});
    }

    const formSubmitted = async (e) => {

        e.preventDefault();

        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (formData.email === '' || formData.password === ''){
            setActiveError(true);
            setError("All field required");
            return;
        }else{
            setActiveError(false);
            setError('');
        }
        
        if (!emailVal.test(formData.email)){
            setActiveError(true);
            setError("Inalid email address");
            return;
        }else{
            setActiveError(false);
            setError('');
        }

        setBtnClicked(true);

        try{

            let url = "https://backend.iruhost.com/api/login";

            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            console.log(response.data);

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
                    window.location = '/cart';
                }else{
                    window.location = '/';
                }
            } 

        }catch(err){
            setActiveError(false);
            setError("Check network connection");
            console.log("Error retrieving user: ", err);
            console.log(err.response);
        }
    }

    return ( 
        <>
        <Head>
            <title>Sign In - IruHost</title>
            <style>{`
                #header,
                #footer {
                    display: none;
                }
            `}</style>
        </Head>
        <section className="w-screen h-screen flex bg-background">
            <div className="hidden sm:block w-3/5 h-full">
                <img src="/signin.jpg" alt="" className="w-full h-full" />
            </div>
            <div className="w-full sm:w-2/5 h-full flex justify-center items-center">
                <form onSubmit={formSubmitted} className="w-4/5 h-max">
                    <header className="mb-5">
                        <h2 className="text-accent text-3xl font-semibold">Sign In</h2>
                    </header>
                    <div id="error" className={`bg-danger text-center text-accent py-2 px-4 rounded w-full h-max mb-2
                        ${activeError ? "block" : "hidden"}
                        `}>
                        {error}
                    </div>
                    <div className="w-full h-max mb-2.5">
                        <div className="w-full h-max mb-4">
                            <label htmlFor="email" className="text-grey mb-4">Email Address:</label>
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded px-2 bg-transparent" />
                            <div className="text-danger"></div>
                        </div>
                        <div className="w-full h-max mb-4">
                            <label htmlFor="password" className="text-grey mb-4">Password:</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded px-2 bg-transparent" />
                            <div className="text-danger"></div>
                        </div>
                        <div className="text-grey">
                            Don't have an account? <Link href={signupUrl} className="text-primary hover:underline transition duration-300 ease-in-out">Sign Up</Link>
                        </div>
                    </div>
                    <div className="h-max w-full py-2">
                        <button className="w-full h-10 flex items-center justify-center bg-btns text-text rounded bg-primary">{
                            btnClicked ? (
                                <img src="/loading.gif" alt="loading image" className="h-5 w-5" />
                            ) : (
                                <span>Sign In</span>
                            )
                    }</button>
                    </div>
                    <div className="w-full h-max-my-2">
                        <Link href={forgetUrl} className="text-accent hover:underline transition duration-300 ease-in-out">Forget Password?</Link>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default Signin;