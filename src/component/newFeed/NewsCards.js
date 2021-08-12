import {React,useState, useEffect} from 'react'
import Looding from '../Looding';
import Card from './Card';

const NewsCards = (props) => {
    const { data , isLoading} = props;
    const [value, setvalue] = useState([]);

    useEffect(() => {

        if (Array.isArray(data)) {
            setvalue(data);
        }

       

    },[data])



    return (
        <div className="newsContainer">
            {
                value.map((n,id) => {
                    return (
                        <div key={id} className="newsCard">
                            {(!isLoading) ? <Card n={n} /> : <Looding />}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default NewsCards
