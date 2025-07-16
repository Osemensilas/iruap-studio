import { useState, useEffect } from "react";

const DomainComponent = () => {

    const [domainOperation, setDomainOperation] = useState("register");
    const [domainOp, setDomainOp] = useState(true);

    const domOpReg = () => {
        setDomainOperation("register");
    }

    const domOpTrans = () => {
        setDomainOperation("transfer");
    }

    useEffect(() => {
        if (domainOperation === 'register'){
          setDomainOp(true);
        }else{
          setDomainOp(false);
        }
    },[domainOperation])

    const formSubmitted = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <form onSubmit={formSubmitted} className="h-max w-full sm:w-1/2">
          <div className="h-max w-full flex items-center justify-center mb-10">
            <div className="h-max w-max bg-grey rounded">
              <button onClick={domOpReg} className={`py-3 pl-3 pr-1 text-xl
                ${domainOp ? "bg-primary rounded-l" : "opacity-50"}
                `}>Register</button>
              <button onClick={domOpTrans} className={`py-3 pr-3 pl-1 text-xl
                ${domainOp ? "opacity-50" : "bg-primary rounded-r"}
                `}>Transfer</button>
            </div>
          </div>
          <div className="w-full h-max flex items-center">
            <input type="text" className="h-[45px] rounded-l w-[80%] outline-none text-base px-5" placeholder="Search domain name" />
            <button className="h-[45px] w-[20%] bg-primary rounded-r text-text text-base">Search</button>
          </div>
        </form>
        </>
    );
}

export default DomainComponent;