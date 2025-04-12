function Home(){
    const handleClick = () => {
        console.log("Hello2")
    }
    return (
        <div>
         <h1 className="font-bold text-black-600 hover:text-pink-200">Home</h1>;
        <button onClick={handleClick}>Click</button>
        </div>
    )
}
export default Home;
