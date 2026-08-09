import { useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import Head from 'next/head';

const ManageEmail = () => {

    const searchParams = useSearchParams();
    const mainDomain = searchParams.get('email');
    const productId = searchParams.get('id');

    const [domain, setDomain] = useState("");
    const [formData, setFormData] = useState({
        mailbox: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState("");
    const [allMails, setAllMail] = useState([]);

    const fetchEmails = useCallback(async () => {

        let url = "https://backend.iruhost.com/api/fetch-mailcow-mail";

        try {
            const response = await axios.get(url, {
                params: {
                    domain: mainDomain,
                },
                headers: {
                    "Content-Type" : "application/json"
                },withCredentials: true
            });

            if (response.data.status === "success") {
                setAllMail(response.data.mails);
            }
        } catch (error) {
            console.log(error.response);
        }
    },[mainDomain])

    useEffect(() => {
        if (!mainDomain) return;

        setDomain(mainDomain);
        fetchEmails();
    },[mainDomain])

    const handleChanged = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value});
    }

    const createEmail = async () => {

        if (!domain || !formData.password || !formData.confirmPassword || !formData.mailbox){
            setError("All Field Required");
            return;
        }

        if (formData.confirmPassword != formData.password){
            setError("Password do not match");
            return;
        }

        setError("");

        const url = "https://backend.iruhost.com/api/create-mailcow-mail";
        
        try {
            const response = await axios.post(url, {
                password: formData.password,
                mailbox: formData.mailbox,
                domain: domain,
                id: productId
            }, {
                headers: {
                    "Content-Type" : "appication/json"
                },withCredentials: true
            })

            if (response.data.status === "error"){
                setError(response.data.message);
            }

            if (response.data.status === "success"){
                fetchEmails();
            }
        } catch (error) {
            console.log("Error sending data: ", error);
        }
    }

    const deleteMail = async (mailbox) => {

        const url = "https://backend.iruhost.com/api/delete-mailcow-mail";
        
        try {
            const response = await axios.post(url, {mailbox: mailbox}, {
                headers: {
                    "Content-Type" : "application/json"
                },withCredentials: true
            });
            console.log(response.data);

            if (response.data.status === "success"){
                fetchEmails();
                setFormData({
                    mailbox: '',
                    password: '',
                    confirmPassword: ''
                });
            }
        } catch (error) {
            console.log("Error sending data: ", error);
        }
    }

    const openMail = async () => {
        window.open("https://mail.iruhost.com/SOGo/", "_blank");
    }

    const showPass = (e) => {
        let passwordInput = e.currentTarget.parentElement.children[1];

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            e.currentTarget.innerText = "Hide";
        } else {
            passwordInput.type = "password";
            e.currentTarget.innerText = "Show";
        }
    }

    return ( 
        <>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <title>Manage Email - IruHost</title>
        </Head>
        <section className="h-max w-full p-10">
            <h2 className="text-xl">Create Email</h2>
            <input className="" value={domain} name="domain" onChange={(e) => setDomain(e.target.value)} id="domain" hidden />
            <div className="h-max w-full mb-4">
                <form onSubmit={(e) => e.preventDefault()} className="h-max w-full flex flex-col gap-3 pr-0 sm:pr-60">
                    <div className={`text-accent bg-danger w-full h-max py-2 text-center rounded
                        ${error ? "" : "hidden"}
                        `}>{error}</div>
                    <div className="h-max w-full gap-2 flex flex-col">
                        <label htmlFor="mailbox" className="text-base text-accent">Mailbox</label>
                        <div className="h-max w-full flex">
                            <div className="h-10 w-10 border border-grey bg-grey rounded-l flex items-center justify-center">
                                <i className="fa fa-envelope text-accent"></i>
                            </div>
                            <input type="text" name="mailbox" value={formData.mailbox} onChange={handleChanged} placeholder="info" className="h-10 w-full border text-text outline-none border-silver mb-1 px-2 bg-transparent" />
                            <div className="h-10 w-max px-5 border border-grey rounded-r text-sm flex items-center justify-center">@{domain}</div>
                        </div>
                        <p className="text-sm text-grey">This will create info@{domain}</p>
                    </div>
                    <div className="h-max w-full gap-2 flex flex-col">
                        <label htmlFor="password" className="text-base text-accent">Password</label>
                        <div className="h-max w-full flex relative">
                            <div className="h-10 w-10 border border-grey bg-grey rounded-l flex items-center justify-center">
                                <i className="fa fa-lock text-accent"></i>
                            </div>
                            <input type="password" name="password" value={formData.password} onChange={handleChanged} className="h-10 w-full border text-text outline-none border-silver mb-1 rounded-r px-2 bg-transparent" />
                            <button type="button" onClick={showPass} className="absolute top-[10px] left-[95%] text-sm text-primary">Show</button>
                        </div>
                        <p className="text-sm text-grey">Use a strong password to keep your email secured</p>
                    </div>
                    <div className="h-max w-full gap-2 flex flex-col">
                        <label htmlFor="confirmPassword" className="text-base text-accent">Confirm Password</label>
                        <div className="h-max w-full flex relative">
                            <div className="h-10 w-10 border border-grey bg-grey rounded-l flex items-center justify-center">
                                <i className="fa fa-lock text-accent"></i>
                            </div>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChanged} className="h-10 w-full border text-text outline-none border-silver mb-1 rounded-r px-2 bg-transparent" />
                            <button type="button" onClick={showPass} className="absolute top-[10px] left-[95%] text-sm text-primary">Show</button>
                        </div>
                        <p className="text-sm text-grey">Re-enter your your password</p>
                    </div>
                    <div className="h-max w-full">
                        <button onClick={createEmail} className="bg-primary text-accent py-2 px-5 rounded">Create</button>
                    </div>             
                </form>
            </div>
            <h2 className="text-xl mt-5">All Mails</h2>
            <div className="h-max w-full mt-3 border-t border-grey pt-10 flex flex-col gap-2">
                {
                    allMails.length > 0 ? (
                        allMails.map((mailbox, index) => (
                            <div key={index} className="h-max w-full flex gap-3">
                                <div className="h-max w-[75%]">
                                    <div className="w-full h-10 rounded border px-5 border-grey flex items-center">{mailbox}</div>
                                </div>
                                <div className="h-max w-[25%] flex items-center gap-2">
                                    <button onClick={() => deleteMail(mailbox)} className="bg-danger text-accent p-2 rounded text-sm">Delete</button>
                                    <button onClick={() => openMail(mailbox)} className="bg-primary text-accent p-2 rounded text-sm">Open</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-text">No mails yet!</p>
                    )
                }
            </div>
        </section>
        </>
     );
}
 
export default ManageEmail;