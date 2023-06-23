

const Error = ({ children }) => {//en esa variable children se va a almacenar loque le pase al componente, sea una funcion o codigo html.
  return (
    <div className="bg-red-800 text-white rounded-md text-center p-3 uppercase m-3"> 
        { children }
    </div>
  )
}

export default Error