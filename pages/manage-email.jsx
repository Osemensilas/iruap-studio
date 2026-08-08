import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from 'axios';
import Head from 'next/head';

const ManageEmail = () => {

    const searchParams = useSearchParams();
    const mainDomain = searchParams.get('email');

    const [domain, setDomain] = useState("");
    const [formData, setFormData] = useState({
        mailbox: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState("");
    const [allMails, setAllMail] = useState([]);

    useEffect(() => {
        if (!mainDomain) return;

        setDomain(mainDomain);
    },[mainDomain])

    const handleChanged = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value});
    }

    const createEmail = async () => {

        if (!domain || !username || !password){
            setError("All Field Required");
            return;
        }else{
            setError("");
        }

        const url = "https://backend.iruhost.com/api/create-cpanel-mail";
        
        try {
            const response = await axios.post(url, {
                username: username,
                password: password,
                domain: domain
            }, {
                headers: {
                    "Content-Type" : "appication/json"
                },withCredentials: true
            })

            console.log(response.data);
        } catch (error) {
            console.log("Error sending data: ", error);
        }
    }

    const deleteMail = () => {
        console.log("Delete Mail");
    }

    const openMail = () => {
        console.log("Open Mail");
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
                <form onSubmit={(e) => e.preventDefault()} className="h-max w-full flex flex-col gap-3">
                    <div className={`text-accent bg-danger w-full h-max py-2 text-center rounded
                        ${error ? "" : "hidden"}
                        `}>{error}</div>
                    <div className="h-max w-full gap-4 flex flex-col">
                        <label htmlFor="mailbox" className="text-base text-accent">Mailbox</label>
                        <div className="h-max w-full flex">
                            <div className="h-10 w-10 border border-grey bg-grey rounded-l flex items-center justify-center">
                                <i className="fa fa-globe text-accent"></i>
                            </div>
                            <input type="text" name="mailbox" value={formData.mailbox} onChange={handleChanged} placeholder="info" className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded-r px-2 bg-transparent" />
                            <div className="h-10 w-10 px-5 rounded-r text-sm flex items-center justify-center">{domain}</div>
                        </div>
                        <p className="text-sm text-grey">This will create info@example.com</p>
                    </div>
                    <div className="h-max w-full gap-4 flex flex-col">
                        <label htmlFor="password" className="text-base text-accent">Password</label>
                        <div className="h-max w-full flex">
                            <div className="h-10 w-10 border border-grey bg-grey rounded-l flex items-center justify-center">
                                <i className="fa fa-globe text-lock"></i>
                            </div>
                            <input type="text" name="mailbox" value={formData.password} onChange={handleChanged} placeholder="info" className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded-r px-2 bg-transparent" />
                        </div>
                        <p className="text-sm text-grey">Use a strong password to keep your email secured</p>
                    </div>
                    <div className="h-max w-full gap-4 flex flex-col">
                        <label htmlFor="confirmPassword" className="text-base text-accent">Confirm Password</label>
                        <div className="h-max w-full flex">
                            <div className="h-10 w-10 border border-grey bg-grey rounded-l flex items-center justify-center">
                                <i className="fa fa-globe text-lock"></i>
                            </div>
                            <input type="text" name="confirmPasswor" value={formData.confirmPassword} onChange={handleChanged} placeholder="info" className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded-r px-2 bg-transparent" />
                        </div>
                        <p className="text-sm text-grey">Re-enter your your password</p>
                    </div>
                    <div className="h-max w-full">
                        <button onClick={createEmail} className="bg-primary text-accent py-2 px-5 rounded">Create</button>
                    </div>             
                </form>
            </div>
            <h2 className="text-xl mt-5">All Mails</h2>
            <div className="h-max w-full mt-3 border-t border-grey pt-10">
                <div className="h-max w-full flex gap-3">
                    <div className="h-max w-[75%]">
                        <div className="w-full h-10 rounded border px-5 border-grey flex items-center">@iruhost.com</div>
                    </div>
                    <div className="h-max w-[25%] flex items-center gap-2">
                        <button onClick={deleteMail} className="bg-danger text-accent p-2 rounded text-sm">Delete</button>
                        <button onClick={openMail} className="bg-primary text-accent p-2 rounded text-sm">Open</button>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default ManageEmail;