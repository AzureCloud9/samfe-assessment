import useFetch from "./useFetch"

export default function Overview () {
    const apiKey = '38NhN4qP-Ji9jJBoc-NfsWEbPs-yMjl2m3H';
    const url = 'https://assessment.samfe.nl/swagger/v1/swagger.json';
  
    const { data, loading, error } = useFetch(url, apiKey);

    if (loading) return <h1>loading...</h1>
    if (error) return console.log('error')
    
    return (
        <>
        
        </>
    )
}