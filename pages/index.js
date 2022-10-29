import Router from 'next/router'

const handler = (path) => {
    Router.push(path)
}

export default () => (
    <button onClick={()=>handler("/sss")}>Click </button>
)