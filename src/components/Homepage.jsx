import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className=" font-sans bg-slate-200 text-white">
            <div className='homepahe w-full h-[90vh] bg-[url("./assets/images/home.jpg")] bg-center bg-cover text-center flex justify-center items-center' >
                <div className= " hero bg-black/80 backdrop-blur-[1 px] w-[70%] mx-auto p-4 gap-10 rounded-3xl">
                    <h1 className="text-7xl    capitalize">best free books and online resourses on the web for telecom students</h1>
                    <p className="text-md font-extralight ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati nam consectetur inventore fugit sed recusandae tenetur natus officia dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere commodi illum impedit, officia distinctio vero porro laboriosam at ex.</p>
                    <div className="flex justify-center my-2">
                        <div className="bg-[url('./assets/images/1.jpg')] w-10 rounded-full h-10 bg-center bg-cover" ></div>
                        <div className="bg-[url('./assets/images/2.jpg')] w-10 rounded-full h-10 bg-center bg-cover ml-[-5px]" ></div>
                        <div className="bg-[url('./assets/images/3.jpg')] w-10 rounded-full h-10 bg-center bg-cover ml-[-5px]" ></div>
                        <p>are all benefitimg from our <span className="text-blue-500">1000 books and resourses</span></p>
                    </div>
                    <button><Link className="bg-blue-500 p-4 text-xl font-bold block border-2 rounded-md uppercase border-blue-500 hover:bg-gray-900" to={"/"}>start learning</Link></button>

                </div>
            </div>
            <div className="next my-4">
                <h1 className="text-2xl text-center mb-4 text-black">Demo Courses</h1>
                <div className="courses flex gap-4 justify-center">
                    <div className="h-[410px] w-[400px] shadow-md shadow-black bg-black text-center">
                        <div className="bg-white h-[60%] bg-center bg-cover"></div>
                        <h1 className="text-center">name:Hedde</h1>
                        <h1>name:Hedde</h1>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae officia commodi repellendus voluptate totam inventore in placeat facilis dolores, minus reprehenderit incidunt dolor atque ad. Aliquid cumque ut nihil.</h1>
                    </div>
                    <div className="h-[410px] w-[400px] shadow-md shadow-black bg-black text-center">
                        <div className="bg-white h-[60%] bg-center bg-cover"></div>
                        <h1 className="text-center">name:Hedde</h1>
                        <h1>name:John</h1>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae officia commodi repellendus voluptate totam inventore in placeat facilis dolores, minus reprehenderit incidunt dolor atque ad. Aliquid cumque ut nihil.</h1>
                    </div>
                    <div className="h-[410px] w-[400px] shadow-md shadow-black bg-black text-center">
                        <div className="bg-white h-[60%] bg-center bg-cover"></div>
                        <h1 className="text-center">name:Hedde</h1>
                        <h1>name:Emmanuel</h1>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae officia commodi repellendus voluptate totam inventore in placeat facilis dolores, minus reprehenderit incidunt dolor atque ad. Aliquid cumque ut nihil.</h1>
                    </div>
                </div>
                <button className="bg-blue-500 p-2 text-xl font-bold block border-2 rounded-md uppercase border-blue-500 ml-auto mr-[10%] my-4 hover:bg-gray-900">Learn more</button>
            </div>

        </div>
    );
}

export default Homepage;