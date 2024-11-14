export async function GET(req) {
    const type = req.nextUrl.searchParams.get('type')
    console.log('Type:', type)
    return Response.json([
        {title: "Samsung Mobile"},
        {title: "Apple Mobile"}
    ]) 
}

export async function POST(req) {
    const body = await req.json();
    console.log("body",body)
    return Response.json({message:"POST Successfully"}) 
}