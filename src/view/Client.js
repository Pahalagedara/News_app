import {React , useState} from 'react'
import NewsCards from '../component/newFeed/NewsCards'
import Search from '../component/Search'
import Toolbar from '../component/Toolbar'
import Footer from '../component/Footer'

const Client = () => {

    const [data, setData] = useState(['']);
    const [isLoading, setIsLoading] = useState(true);
    

    return (
        <div>
            <Toolbar />
            <Search setData={setData} setIsLoading={ setIsLoading }/>
            <NewsCards data={data} isLoading={ isLoading }/>
            <Footer />
        </div>
    )
}

export default Client
