import Head from "next/head";
import { useRouter } from "next/router";

const TwoFactorAuth = () => {

    const router = useRouter();

    const cancelClicked = () => {
        router.back();
    }

    return ( 
        <>
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <title>Add Two FA Authentication - IruHost</title>
        </Head>
        <section className="h-max w-screen bg-accent flex items-center justify-center py-20">
            <form onSubmit={(e) => e.preventDefault()} className="bg-accent cards-shadow rounded px-10 w-[500px]">
                <header className="h-max w-full py-10 mb-3 border-b border-grey text-xl font-bold">
                    <h2>Add Two Factor Authentication</h2>
                </header>
                <div className="h-max w-full">
                    <div className="h-max w-full flex flex-col mb-3">
                        <label htmlFor="q1" className="mb-2">Question One</label>
                        <select name="q1" id="q1" className="h-10 w-full border border-grey rounded outline-none px-5">
                            <option value="">-- Select first question --</option>
                            <option value="what is your favorite sport">What is your favorite sport</option>
                            <option value="what is your childhood nike name">What is your childhood nike name</option>
                            <option value="what is your country of dream vacation">What is your country of dream vacation</option>
                            <option value="what is your favorite dish">What is your favorite dish</option>
                            <option value="who was your first crush">Who was your first crush</option>
                            <option value="what is your pet's name">What is your pet's name</option>
                            <option value="what is your mother's name">What is your mother's name</option>
                            <option value="what is your childhood dream vacation">What is your childhood dream vacation</option>
                        </select>
                    </div>
                    <div className="h-max w-full mb-3">
                        <label htmlFor="a1" className="mb-2">Answer to question one</label>
                        <input type="text" name="a1" id="a1" className="h-10 w-full border border-grey rounded outline-none px-5" />
                    </div>
                    <div className="h-max w-full flex flex-col mb-3">
                        <label htmlFor="q2" className="mb-2">Question Two</label>
                        <select name="q2" id="q2" className="h-10 w-full border border-grey rounded outline-none px-5">
                            <option value="">-- Select first question --</option>
                            <option value="what is your favorite sport">What is your favorite sport</option>
                            <option value="what is your childhood nike name">What is your childhood nike name</option>
                            <option value="what is your country of dream vacation">What is your country of dream vacation</option>
                            <option value="what is your favorite dish">What is your favorite dish</option>
                            <option value="who was your first crush">Who was your first crush</option>
                            <option value="what is your pet's name">What is your pet's name</option>
                            <option value="what is your mother's name">What is your mother's name</option>
                            <option value="what is your childhood dream vacation">What is your childhood dream vacation</option>
                        </select>
                    </div>
                    <div className="h-max w-full mb-3">
                        <label htmlFor="a2" className="mb-2">Answer to question two</label>
                        <input type="text" name="a2" id="a2" className="h-10 w-full border border-grey rounded outline-none px-5" />
                    </div>
                </div>
                <div className="h-max w-full flex mb-10 gap-10 items-center mt-5">
                    <button className="py-2 px-5 rounded bg-primary text-text">Submit</button>
                    <button onClick={cancelClicked} className="text-danger hover:underline transition-all duration-500">Cancel</button>
                </div>
            </form>
        </section>
        </>
     );
}
 
export default TwoFactorAuth;