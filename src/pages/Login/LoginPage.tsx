import logoUrl from '../../assets/IDP3-logo.png'
import modularBuildingDemo from '../../assets/modular-building-loginpage.png'

function LoginPage(){

    return(
        <div className='h-screen'>
            <div className="w-screen">
                <nav className='flex justify-center p-3 border border-gray-200 z-10'>
                    <img src={logoUrl} alt="" className='w-42'/>
                </nav>
            </div>
            <div className='flex flex-row w-screen h-full'>
                <div className='w-1/2 h-full'>
                    <img src={modularBuildingDemo} alt="" className='w-full h-full object-cover'/>
                </div>
                <div className='flex flex-1 bg-[#22296A] px-10 py-5'>
                    <div className='flex flex-col justify-center m-8 text-left'>
                        <p className='text-white text-[13px] font-normal'>Your Expert Source For Prefabricated Modular Wall & Office Building Systems, For All Industries. Our prefabricated modular buildings and modular offices are by far our most popular products. They are cost efficient, easily installed, and highly customizable. Whether you need a multi-story complex or a single modular office, we have the perfect solution.</p>
                        <form className='flex flex-col my-5 gap-4'>
                            <input type="text" name="username" id="" className='h-[45px] bg-white rounded-md w-full p-2' placeholder='Username'/>
                            <input type="password" name="password" id="" className='h-[45px] bg-white rounded-md w-full p-2' placeholder='Password'/>
                            <div className='flex justify-between'>
                                <div>
                                    <input type="checkbox" name="remember" id="" />
                                <label htmlFor="" className='text-white text-[13px] font-normal pl-2'>Remember me</label>
                                </div>
                                <div>
                                    <a href="#" className='text-white text-[13px] font-normal'>Forgot Password</a>
                                </div>
                            </div>
                            <input type="submit" value="Login" className='bg-[#DCB33B] rounded-md py-3'/>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage