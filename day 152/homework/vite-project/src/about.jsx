function About(){
    const handleClick = () => {
        console.log("Hello3")
    }
    return (
        <div>
         <p className="font-bold text-red-800 hover:text-blue-700">Hello</p>
        <button onClick={handleClick}>Click</button>
        </div>
    )
} 

export default About;

