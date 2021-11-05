import { useRouter } from "next/router";
import { useEffect } from "react";

const ErrorPage = () => {

    const Router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            Router.push('/')
        },2000)
    },[])

    return ( 
        <div>
            <h1>Error 404 page</h1>
        </div>
    );
}
 
export default ErrorPage;