import React from 'react'

// imports
import './style.css'

import Content from '../Content/index';

const Tweet = () => {
    
    return(
        <>
        <div>
            <div id="content-box">
                <img id="avatar" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b8919e7a-2bb5-40c7-af15-8218d853bd92/d4njygs-38bef077-dd7a-4e80-8ac2-663485780f8c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjg5MTllN2EtMmJiNS00MGM3LWFmMTUtODIxOGQ4NTNiZDkyXC9kNG5qeWdzLTM4YmVmMDc3LWRkN2EtNGU4MC04YWMyLTY2MzQ4NTc4MGY4Yy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.97iDFWMCwnMfr3OGhMiEJKwcoxrakU8dT243QxKG0cs" alt=""/>
                <Content />
            </div>
        </div>

        </>
    )
}


export default Tweet