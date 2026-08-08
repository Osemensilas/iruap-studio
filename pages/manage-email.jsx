import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from 'axios';
import Head from 'next/head';

const ManageEmail = () => {

    const searchParams = useSearchParams();
    const mainDomain = searchParams.get('email');

    const [domain, setDomain] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [allMails, setAllMail] = useState([]);

    useEffect(() => {
        if (!mainDomain) return;

        setDomain(mainDomain);
    },[mainDomain])

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
                    <div className="h-max w-full">
                        <label htmlFor="username" className="text-grey text-base">Username:</label>   
                        <div className="h-max w-full flex items-center gap-3">
                            <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-[50%] h-10 rounded border px-5 border-grey" id="username" />
                            <div className="w-[50%] h-10 rounded border px-5 border-grey flex items-center">@{mainDomain}</div>
                        </div>
                    </div>
                    <div className="h-max w-full flex flex-col">
                        <label htmlFor="password" className="text-grey text-base">Password:</label>   
                        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-[50%] h-10 rounded border px-5 border-grey" id="password" />
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