import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const Share = () => {

    const searchParams = useSearchParams();
    const mainDomain = searchParams.get('domain');

    const [isLocked, setIslocked] = useState("True");
    const [ownerEmailError, setOwnerEmailError] = useState('');
    const [managerEmailError, setManagerEmailError] = useState('');
    const [managerEmail, setManagerEMail] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerChanged, setOwnerChanged] = useState('');
    const [managerAdded, setManagerAdded] = useState('');

    useEffect(() => {

    if(!mainDomain) return;
    
    async function getAuthStatus(){
        try{
            let url = "https://backend.iruhost.com/api/get-domain-lock-status";

            const response = await axios.post(url, {domain: mainDomain}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            
            if (response.data.status === 'success'){
                setIslocked(response.data.result);
            }
        }catch(error){
            console.log("Error fetching auth info: ", error);
        }
    }

    getAuthStatus();

    },[mainDomain])

    const changeOwner = async () => {

        const emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (ownerEmail === ""){
            setOwnerEmailError("Email address required");
            return;
        }

        if (!emailVal.test(ownerEmail)){
            setOwnerEmailError("Invalid email address");
            return;
        }

        setOwnerEmailError("");

        try{
            let url = "https://backend.iruhost.com/api/change-domain-ownership";

            const response = await axios.post(url, {domain: mainDomain, email: ownerEmail}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            
            if (response.data.status === 'error'){
                setOwnerEmailError(response.data.message);
            }

            if (response.data.status === 'success'){
                setOwnerEmailError('');
                setOwnerChanged(response.data.message);
            }
        }catch(error){
            console.log("Error changing domain owner: ", error);
        }
    }

    const addManager = async () => {

        const emailVal = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (managerEmail === ""){
            setManagerEmailError("Email address required");
            return;
        }

        if (!emailVal.test(managerEmail)){
            setManagerEmailError("Invalid email address");
            return;
        }

        setManagerEmailError("");

        try{
            let url = "https://backend.iruhost.com/api/add-domain-manager";

            const response = await axios.post(url, {domain: mainDomain, email: managerEmail}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            console.log(response.data);

            if (response.data.status === 'error'){
                setManagerEmailError(response.data.message);
            }

            if (response.data.status === 'success'){
                setManagerAdded('Manager Added Successfully');
                setManagerEmailError('');
            }
        }catch(error){
            console.log("Error adding domain manager: ", error);
        }
    }

    const unlockClicked = async () => {
        try{
            let url = "https://backend.iruhost.com/api/unlock-domain";

            const response = await axios.post(url, {domain: mainDomain, lock: isLocked}, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })
            console.log(response.data);
        }catch(error){
            console.log("Error unlocking domain: ", error);
        }
    }

    return ( 
        <>
        <div className="h-max w-full min-h-screen">
            <h3 className="text-2xl mb-2">Share Access</h3>
            <form onSubmit={(e) => e.preventDefault()} className="h-max w-full border-t border-grey py-3 mb-5">
                <div className="h-max w-full mb-2">
                    <p className="text-sm">Change access rights for the individuals you have designated to act as domain managers. You can also designate a new manager, using that person's email address registered with Iruhost.</p>
                </div>
                <p className={`text-danger text-sm
                    ${managerEmailError ? "" : "hidden"}
                    `}>{managerEmailError}</p>
                <p className={`text-green-500 text-sm
                    ${managerAdded ? "" : "hidden"}
                    `}>{managerAdded}</p>
                <div className="h-max w-full flex items-center gap-5">
                    <div className="h-max w-[15%]">
                        <label htmlFor="manager">Manager</label>
                    </div>
                    <div className="h-max w-[85%] flex items-center justify-start">
                        <input type="text" value={managerEmail} name="managerEmail" onChange={(e) => setManagerEMail(e.target.value)} className="h-10 w-80 border border-grey rounded-tl rounded-bl px-3 outline-none" placeholder="Email address" />
                        <button type="submit" onClick={addManager} className="px-6 h-10 bg-primary outline-none rounded-tr rounded-br text-sm">ADD</button>
                    </div>
                </div>
            </form>
            <h3 className="text-2xl mb-2">Change Ownership</h3>
            <form onSubmit={(e) => e.preventDefault()} className="h-max w-full border-t border-grey py-3 mb-5">
                <div className="h-max w-full mb-2">
                    <p className="text-sm">With a change of ownership, you fully relinquish ownership of the domain (along with some associated services) and designate a new owner. If the new owner doesn't have a Iruhost account yet, she or he will have the option to create one.</p>
                </div>
                <p className={`text-danger text-sm
                    ${ownerEmailError ? "" : "hidden"}
                    `}>{ownerEmailError}</p>
                <p className={`text-green-500 text-sm
                    ${ownerChanged ? "" : "hidden"}
                    `}>{ownerChanged}</p>
                <div className="h-max w-full flex items-center gap-5">
                    <div className="h-max w-[15%]">
                        <label htmlFor="manager">New Owner</label>
                    </div>
                    <div className="h-max w-[85%] flex items-center justify-start">
                        <input type="text" value={ownerEmail} name="ownerEmail" onChange={(e) => setOwnerEmail(e.target.value)} className="h-10 w-80 border border-grey rounded-tl rounded-bl px-3 outline-none" placeholder="Email address" />
                        <button type="submit" onClick={changeOwner} className="px-6 h-10 bg-primary outline-none rounded-tr rounded-br text-sm">CHANGE</button>
                    </div>
                </div>
            </form>
            <h3 className="text-2xl mb-2">Transfer Out</h3>
            <div className="h-max w-full border-t border-grey py-3 mb-5">
                <div className="h-max w-full mb-2">
                    <p className="text-sm">From here, you can transfer your domain name out from Iruhost to another registrar. To transfer out, you will need to make sure that Domain Lock is turned OFF and get an Auth Code. After you place the request here, we'll send your Auth Code to the registrant email address specified for this domain. It may take up to 5 days for the transfer to be completed.</p>
                </div>
                <div className="h-max w-full flex items-center gap-5">
                    <div className="h-max w-[15%]">
                        <label htmlFor="manager">Domain Lock</label>
                    </div>
                    <div className="h-max w-[85%] flex items-center justify-between">
                        <div className="h-max w-[20%]">
                            <div className="h-max w-full flex items-center gap-3">
                                <h3 className="font-semibold text-xl text-primary">{isLocked === "True" ? (<p>ON</p>) : (
                                    <p>OFF</p>
                                )}</h3>
                                <button type="button" onClick={unlockClicked} className="font-semibold text-xl text-danger">{isLocked === "True" ? (<span>UNLOCK</span>) : (<span>LOCK</span>)}</button>
                            </div>
                            <div className={`text-sm text-grey
                                ${isLocked === "True" ? "hidden" : ""}
                                `}> <i className="fa fa-check"></i> Domain Lock Successful</div>
                        </div>
                        <div className="h-max w-max">
                            <button className="py-2 px-3 bg-primary text-sm cursor-pointer rounded">AUTH CODE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Share;