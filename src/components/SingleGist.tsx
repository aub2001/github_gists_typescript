import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GistType } from '../state/actions/gistActionTypes';
import axios from 'axios';

import SingleGistCard from './SingleGistCard';
import { Container } from './Container';

const SingleGist = () => {

    const params = useParams();
    const {id} = params;

    
    const [singleGist , setSingleGist] = useState({})
    const [fetchError, setFetchError ] = useState(true)
 
    const fetchData = async () => {
        try{   
            const response = await axios.get(`https://api.github.com/gists/${id}`);
            setSingleGist(response.data);
            setFetchError(false);                    

        }catch(err){
            setFetchError(true);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    

    console.log(singleGist)
  return (
    <Container display="flex" justifyContent='center'>

    { !fetchError &&
     <SingleGistCard
        image = {singleGist.owner.avatar_url}
        filename = {Object.values( singleGist.files)[0].filename}
        type= {Object.values( singleGist.files)[0].type}
        login = {singleGist.owner.login}
        description = {singleGist.description}
        content = {Object.values( singleGist.files)[0].content}
    />
    }

    </Container>
  )
}

export default SingleGist