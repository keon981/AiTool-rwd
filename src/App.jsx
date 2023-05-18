import { useEffect } from "react";
import axios from "axios";

const App = () => {
    const api_path = import.meta.env.VITE_API_PATH;

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/v2/api/${api_path}/products/all`);
            console.log(res);
        })();
    }, []);

    return (
        <>
            <h1 className="text-primary">React 最終挑戰</h1>
        </>
    );
};

export default App;
