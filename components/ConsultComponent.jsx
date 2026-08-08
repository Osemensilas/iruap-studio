import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const ConsultComponent = () => {

    const [expandTerms, setExpandTerms] = useState(false);
    const [error, setError] = useState('');
    const [noError, setNoError] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [formData, setFormData] = useState({
        'firstname': '',
        'lastname': '',
        'phone': '',
        'code': '',
        'email': '',
    });

    const cancelClicked = () => {
        setExpandTerms(false);
    }

    const showTerms = () => {
        setExpandTerms(true);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value})
    }

    const formSubmitted = async () => {
        setBtnClicked(true);

        let emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (formData.firstname === '' || formData.lastname === '' || formData.email === '' || 
            formData.code === '' || formData.phone === ''
        ){
            setError("All field required");
            setBtnClicked(false);
            return;
        }else{
            setError("");
        }

        if (!emailVal.test(formData.email)){
            setError("Invalid email address");
            setBtnClicked(false);
            return;
        }else{
            setError("");
        }
        
        try {
            let url = "https://backend.iruhost.com/api/consult";

            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            if (response.data.status === 'error'){
                setError(response.data.message);
            }else{
                setError("");
                setNoError(true);
                setFormData({
                    'firstname': '',
                    'lastname': '',
                    'phone': '',
                    'code': '',
                    'email': '',
                });
            }
            setBtnClicked(false);
        } catch (error) {
            console.log("Error sending data: ", error);
            setBtnClicked(false);
        }
    }


    useEffect(() => {
        if (noError){
            setTimeout(() => {
                setNoError(false);
            }, 10000);
        }
    },[noError])

    return ( 
        <div>
            <div className="h-screen w-screen flex items-center justify-center px-3 sm:px-0">
                <div className="h-max w-max mx-auto bg-accent rounded cards-shadow p-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-text text-center">Let a professional contact you</h2>
                    <form onSubmit={(e) => e.preventDefault()} className="h-max w-full sm:w-[450px] space-y-6 mt-10">
                        <div className={`bg-danger text-accent rounded py-2 text-center
                        ${error ? "" : "hidden"}
                        `}>{error}</div>
                        <div className={`bg-green-500 text-accent rounded py-2 text-center
                        ${noError ? "" : "hidden"}
                        `}>Thank you, Our agent will contact you.</div>
                        <div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex-1">
                                            <label htmlFor="firstname" className="block text-sm font-medium text-grey mb-1">First Name:</label>
                                            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} id="firstname" className="w-full border border-grey rounded px-3 py-2 outline-none" />
                                        </div>
                                        <div className="flex-1">
                                            <label htmlFor="lastname" className="block text-sm font-medium text-grey mb-1">Last Name:</label>
                                            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} id="lastname" className="w-full border border-grey rounded px-3 py-2 outline-none" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-grey mb-1">Phone Number:</label>
                                    <div className="flex gap-2">
                                        <input name="code" value={formData.code} onChange={handleChange} className="border border-grey w-[20%] rounded px-2 py-2 bg-transparent outline-none" placeholder="+1" />
                                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} id="phone" className="flex-1 w-[80%] border border-grey rounded px-3 py-2 outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-grey mb-1">Email:</label>
                                    <input type="text" name="email" value={formData.email} onChange={handleChange} id="email" className="w-full border border-grey rounded px-3 py-2 outline-none" />
                                </div>
                            </div>
                        </div>
                        <div>
                        <p className="text-xs text-neutralDark">
                            *By submitting your information you provide written consent to IruHost.com and its affiliates contacting you.
                            <span onClick={showTerms} className="text-primary underline cursor-pointer full-details ml-1">See full details.</span>
                        </p>
                        </div>
                        <div>
                            <button type="submit" onClick={formSubmitted} className="bg-primary text-white rounded py-2 px-6 font-semibold">{
                                btnClicked ? (
                                    <img src="/loading.gif" alt="loading image" className="h-5 w-5" />
                                ) : (
                                    <span>Let's Discuss</span>
                                )
                                }</button>
                        </div>
                    </form>
                </div>
                <div className={`fixed top-0 left-0 w-screen h-screen items-center justify-center after-css
                    ${expandTerms ? "flex" : "hidden"}
                    `}>
                    <div className="relative z-50 bg-accent w-[450px] h-max rounded shadow p-6 full-detail">
                        <div className="flex items-center justify-between mb-4 full-detail-top">
                            <h2 className="text-xl font-bold text-primary">Information Details</h2>
                            <div onClick={cancelClicked} className="full-detail-close-container">
                                <div className="text-red-500 cursor-pointer full-detail-close">Close</div>
                            </div>
                        </div>
                        <div className="full-detail-content">
                            <p className="text-sm text-neutralDark">
                            *By submitting your information you expressly consent to IruHost.com and its affiliates contacting you regarding our services and offering through your email address, voice (which may be auto-dialed or pre-recorded), text(WhatsApp or text message). Your are not required to give consent to make purchase with us and you can find additional information on our <Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ConsultComponent;