import { React, useState, useEffect } from 'react';
import axios from 'axios';


const Search = (props) => {

    //variable
    const { setData, setIsLoading } = props;
    const [keyword, setkeyword] = useState();
    const defaultUrl =(`https://newsapi.org/v2/everything?q=apple&apiKey=${process.env.REACT_APP_APIKEY}`);
    const [url, setUrl] = useState(defaultUrl);

    
    //api call
    const dataFletch =  async() => {
        await axios.get(url)
            .then((res) => {
                console.log("url" + url)
                console.log("keword"+keyword)
                const data = res.data;
                const body = data.articles
                setIsLoading(false)
                setData(body);
            })

            .catch((error) => {
                console.log(error);
                setIsLoading(false)
            })
    }
    
    
    //functions
    const value = (e) => {
        setkeyword(e.target.value);
    };

    const btn_search = (e) => {
        e.preventDefault()
        setUrl(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${process.env.REACT_APP_APIKEY}`)
    };

    useEffect(() => {
        dataFletch(); 
        setIsLoading(true)
    },[url])



    return (
        <div className="searchbar-con">
            <form onSubmit={btn_search}>
                <input className="searchbar" type="text" onChange={value} placeholder="Keyword"/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search
