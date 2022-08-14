import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className=" font-sans bg-slate-200 text-white">
            <div className='homepahe w-full lg:h-fit          h-fit bg-[url("./assets/images/home.jpg")] bg-center bg-cover ' >
                <div className= " hero bg-black/50 backdrop-blur-[.5pxpx] w-[100%] h-full flex-col py-[5%] text-center p-4 gap-10 ">
                    <h1 className="lg:text-8xl  text-4xl  capitalize sm:text-5xl">best free books and online resourses on the web for telecom students</h1>
                    <p className="text-md font-light lg:text-3xl lg:w-[50%] mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati nam consectetur inventore fugit sed recusandae tenetur natus officia dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facere commodi illum impedit, officia distinctio vero porro laboriosam at ex.</p>
                    <div className="flex justify-center my-2">
                        <div className="bg-[url('./assets/images/1.jpg')] w-10 rounded-full h-10 lg:h-16 lg:w-16 bg-center bg-cover" ></div>
                        <div className="bg-[url('./assets/images/2.jpg')] w-10 rounded-full h-10 lg:h-16 lg:w-16 bg-center bg-cover ml-[-5px]" ></div>
                        <div className="bg-[url('./assets/images/3.jpg')] w-10 rounded-full h-10 lg:h-16 lg:w-16 bg-center bg-cover ml-[-5px]" ></div>
                        <p className="text-center sm:py-0 text-lg lg:py-4">are all benefitimg from our <span className="text-blue-500">1000 books and resourses</span></p>
                    </div>
                    <button><Link className="bg-blue-500 p-2 text-md md:text-lg lg:p-8 lg:text-xl font-bold block border-2 rounded-md uppercase border-blue-500 hover:bg-gray-900" to={"/"}>start learning</Link></button>

                </div>
            </div>
            <div className="next my-4">
                <h1 className="text-2xl text-center mb-4 text-black">Demo Courses</h1>
                <div className="courses  grid grid-cols-4 lg:grid-cols-4 gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 justify-center">
                    <div className="h-[410px] w-max-[300px] sm:w-300px  shadow-md shadow-black text-gray-900 bg-white ">
                        <div className="bg-white  h-[40%] bg-center bg-cover bg-[url('./assets/images/pic.jpg')]"></div>
                        <h1 className=" text-lg sm:text-md  capitalize text-center">ip phone configs</h1>
                        <h1>name:The boy</h1>
                        <h1 className="font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae officia commodi repellendus voluptate totam inventore in placeat facilis dolores, minus reprehenderit incidunt dolor atque ad. Aliquid cumque ut nihil.</h1>
                    </div>
                    <div className="h-[410px] w-max-[300px] sm:w-300px  shadow-md shadow-black text-gray-900 bg-white ">
                        <div className="bg-white  h-[40%] bg-center bg-cover bg-[url('./assets/images/pic.jpg')]"></div>
                        <h1 className=" text-lg sm:text-md  capitalize text-center">ip phone configs</h1>
                        <h1>name:The boy</h1>
                        <h1 className="font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae officia commodi repellendus voluptate totam inventore in placeat facilis dolores, minus reprehenderit incidunt dolor atque ad. Aliquid cumque ut nihil.</h1>
                    </div>
                
                    <div className="h-[410px] w-max-[300px] sm:w-300px  shadow-md shadow-black text-gray-900 bg-white ">
                        <div className="bg-white  h-[40%] bg-center bg-cover bg-[url('./assets/images/pic2.jpg')]"></div>
                        <h1 className=" text-lg sm:text-md  capitalize text-center">Private network using MSAN</h1>
                        <h1>name:John</h1>
                        <h1 className="font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae officia commodi repellendus voluptate totam inventore in placeat facilis dolores, minus reprehenderit incidunt dolor atque ad. Aliquid cumque ut nihil.</h1>
                    </div>
                    <div className="h-[410px] w-max-[300px] sm:w-300px  shadow-md shadow-black text-gray-900 bg-white ">
                        <div className="bg-white  h-[40%] bg-center bg-cover bg-[url('./assets/images/pic4.jpg')]"></div>
                        <h1 className=" text-lg sm:text-md  capitalize text-center">ip phone configs</h1>
                        <h1>name:Emmanuel</h1>
                        <h1 className="font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum beatae officia commodi repellendus voluptate totam inventore in placeat facilis dolores, minus reprehenderit incidunt dolor atque ad. Aliquid cumque ut nihil.</h1>
                    </div>
                </div>
                <button className="bg-blue-500 p-2 text-xl font-bold block border-2 rounded-md uppercase border-blue-500 ml-auto mr-[10%] my-4 hover:bg-gray-900 ">Learn more</button>
            </div>

        </div>
    );
}

export default Homepage;