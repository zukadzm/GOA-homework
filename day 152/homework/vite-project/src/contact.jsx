function Contact(){
    const handleClick = () => {
        console.log("Hello")
    }
    return (
        <div>
         <p className="font-bold text-blue-400 hover:text-red-500">Contact</p>   
        <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Contact;

//   const handleClick = () => {
//     console.log("Component");
//   };

//   return(
//     <>
//       <h1>Welcome to the Component Page</h1>
//       <button onClick={handleClick}>Click me</button>
//     </>