
async function JsonPlace() {
    const res = await fetch(`http://localhost:3000/api/hello`);
    return res.json();
}

export default async function Page(){
    // Initiate both requests in parallel
    const response = JsonPlace();
    
    // Wait for the promises to resolve
    const [data] = await Promise.all([response]);

    return(
        <>
            <h1>{JSON.stringify(data.data)}</h1>
        </>
    )
}