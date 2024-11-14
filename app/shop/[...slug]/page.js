export default function Page({params}){
    return (
        <div>My Post: {params.slug[0]} / {params.slug[2]} / {params.slug[2]}</div>
    )
}