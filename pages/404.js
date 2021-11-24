import { useRouter } from "next/router";
import { useEffect } from "react";
import { Typography } from "../src/components/atoms/typography/typography.component";

function ErrorPage(){

    const Router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            Router.push('/')
        },2000)
    },[])

    return ( 
        <div>
            <Typography variant="h1">Error 404 page</Typography>
        </div>
    );
}
 
export default ErrorPage;