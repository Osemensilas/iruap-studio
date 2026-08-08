import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const FeedbackComponent = () => {

    const [userPresent, setUserPresent] = useState(false);
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");
    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(0);

    useEffect(() => {
        async function res() {
        
            try{
                const url = "https://backend.iruhost.com/api/session";
    
                const response = await axios.get(url, {
                    withCredentials: true
                });
    
                if (response.data.success === true){
                    setUserPresent(true);
                }else{
                    setUserPresent(false);
                }
            }catch(err){
                console.log("Could not retrieve user: ", err);
            }
        }
    
        res();
    },[])

    const submitMsg = async () => {

        const url = "https://backend.iruhost.com/api/add-new-comment";

        try{
            const response = await axios.post(url, {msg: msg}, {
                headers: {
                    "Content-Type": "application/json"
                },withCredentials: true
            })

            if (response.data.status === "success"){
                setMsg("");
            }else{
                setError(response.data.message);
                startCounter();
            }
        }catch(error){
            console.log("Could not submit message: ", error);
        }
    }

    const startCounter = () => {
        setTimeout(() => {
            setError("");
        }, 5000);
    }

    useEffect(() => {
        async function getComments() {
            let url = "https://backend.iruhost.com/api/get-comments";

            try {
                const response = await axios.get(url, {
                    headers: {
                        "Content-Type": "application/json"
                    },withCredentials: true
                });

                console.log(response.data);
                if (response.data.status === "success") {
                    setComments(response.data.message);
                    setCommentCount(response.data.message.length);
                }
            } catch (error) {
                console.log("Could not get comments: ", error);
            }
        }

        getComments();

        const counter = setInterval(() => {
            getComments();
        }, 5000);

        const clearCounter = () => {
            clearInterval(counter);
        }

        return clearCounter;
    },[])
    
    return ( 
        <>
        <form onSubmit={(e) => e.preventDefault()} className="h-max w-full py-4 px-3 sm:px-20">
            <h4 className="text-text text-xl mb-5">Ask Question</h4>
            <div className="h-max w-full border-t border-grey pt-5">
                <div className="h-max w-full mb-4">
                    <div className={`my-2 w-full text-accent bg-danger rounded text-center text-sm p-2
                        ${error ? "" : "hidden"}
                        `}>
                        {error}
                    </div>
                    <label htmlFor="msg" className="hidden">Comment</label>
                    <textarea name="msg" value={msg} onChange={(e) => setMsg(e.target.value)} id="msg" className="max-h-40 min-h-40 min-w-full max-w-full border border-grey rounded p-2 text-base"></textarea>
                </div>
                <div className="h-max w-full">
                    <Link href="/sign-in" className={`text-primary text-base underline 
                            ${userPresent ? "hidden" : "block"
                        }`}>
                        Sign In to Comment
                    </Link>
                    <div className={`${userPresent ? "block" : "hidden"}`}>
                        <button onClick={submitMsg} className="bg-primary text-accent text-base py-2 px-4 rounded">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        <h4 className="text-text text-xl mb-5">{commentCount} Comment(s)</h4>
        <div className="h-max w-full py-4 px-3 sm:px-20 border-t border-grey">
            {
                comments.map((comment, index) => (
                    <div key={index} className="mb-4 h-max w-full border border-grey bg-lighterGrey p-3 rounded">
                        <div className="h-max w-full mb-4">
                            <div className="flex gap-2 flex-col items-start justify-start mb-2">
                                <h4 className="text-base text-text">{comment.name}</h4>
                            </div>
                            <div className="h-max">
                                <p className="text-base text-text">{comment.comment}</p>
                            </div>
                        </div>
                        <div className={`border-t border-grey pt-3 pl-20 ${comment.comment_reply ? "block" : "hidden"}`}>
                            <div className="flex gap-2 flex-col items-start justify-start mb-2">
                                <h4 className="text-base text-text">{comment.reply_by}</h4>
                                <h5 className="text-sm text-grey">Iruhost Support</h5>
                            </div>
                            <div className="h-max w-full mb-4 flex items-start gap-4">
                                <p className="text-base text-text">{comment.comment_reply}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
     );
}
 
export default FeedbackComponent;