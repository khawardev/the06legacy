import { Globe, Mail } from "lucide-react"
import { useState } from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [email, setEmail] = useState(false)
    const path = window.location.pathname;
    return (
        <div className='md:w-9/12 px-4 mx-auto  md:py-12 py-4'>
            <div className="grid md:grid-cols-2 md:gap-28 gap-16">
                <div>
                    {path !== '/not-endorsed' ?
                        <div className="bg-green-600 text-white text-center py-1 mb-4">
                            <span className=" text-sm font-bold uppercase">Endorsed</span>
                        </div>
                        :
                        <div className="bg-[#7e7142] text-white text-center py-1 mb-4">
                            <span className=" text-sm font-bold uppercase">NOT Endorsed</span>
                        </div>
                    }
                    <h2 className="text-3xl font-extrabold mb-4 text-center">Elizabeth Warren</h2>

                    <div className="   flex flex-col items-center mb-4">
                        <div className="relative">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/3ca2/5461/e154bcf13de126453a0d6d2f2ea101e0?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZCsAmikCoG1sHVHvVbcWscRGYhCJGuEgInOy3vg-nZHsS04BFf3cRca68Vbnv~c~nVtndWV89rWtuiT2kFlNzhElTqaG4apCHUP79U-6~RqO5R9NweeW1WUYFZ0cBLLM9o7~SxQv5IeRgQEV8siQTIeA3fixy6B-lNQ5TUSkbY4a2kmtPi~eGgFlMal479tKsY~wX9ml-~1pMwVCfXEI~jCYdNl5qIFUgvrceDQ44rJ3Rz-66Lxq7MX6pP6Ud3eUmaLz6dVoZrriTnmOETBxU~yJqK65q-mBePu3PuDuZ9tkVsI4oXZBDMyRql0xtY11qI1kMBWeZ~HLBUT0RVj3Ug__"
                                alt="Elizabeth Warren"
                                width={100}
                                height={100}
                                className="relative "
                            />
                            {path !== '/not-endorsed' &&
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/276d/0261/e8a6d2e40e2ef29b0da2399cfb4b178e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C7uJnBMBPosMhOlaYXVt5Wn7nGj3GIREwjnM8UTRadrQFXuuszD~9wj3nJ8D7JNH20U77MtP6KKJGycifOEKt4iV7VhdzVc7bMFdd7WO2K3wXO4kjELS2oXmxxS4oGdyhG~J0~dDep02E1yO2pDc-HwMaPhG6SA6SS~ySOECFpicSJDlSFMPoGZ8iVBCN7qpw1gunq94PFy7GB~1GP5xIPDq-uB0n8zpldtMZiBTT8mVRAuf3~lnwFRYxXtivgGVxPpbJqVMnsYtgtX~i6YjFE1vyoiyAs59hhPJSAsykGfCPCyVwzcI6L8TekIht8qup2e8WyMu5fPIMd6pOZvquQ__"
                                    alt="Elizabeth Warren"
                                    width={40}
                                    height={40}
                                    className="absolute -bottom-3 -right-3"
                                />
                            }
                        </div>

                        <div className='text-center mt-4'>
                            <p className="font-extrabold  ">Democratic</p>
                            <p className='font-extrabold leading-3'>Federal Senator</p>
                        </div>
                    </div>

                    <div className="mb-4 ">
                        <h3 className="font-extrabold  ">WEBSITE</h3>
                        <a href="https://www.warren.senate.gov/" className="text-blue-600 hover:underline">
                            https://www.warren.senate.gov/
                        </a>
                    </div>
                    {children}
                </div>
                <div>
                    <img
                        src="https://cdn.britannica.com/07/5207-050-5BC9F251/Gray-wolf.jpg"
                        alt="Wolves in grass"
                        width={400}
                        height={300}
                        className="w-full h-auto mb-4"
                    />

                    <div className="  mb-4">
                        <h3 className="font-extrabold text-xl mb-2">TAKE ACTION!</h3>
                        <p className=' text-sm text-gray-600'>
                            Your elected official has been endorsed as pro-wolf for their commitment to protecting wolves. Sending them a personalized thank you will reinforce their efforts. We make it easier than ever to be a wolf advocate!
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className=''>
                            <h4 className="font-extrabold flex items-center mb-2">
                                <Mail className=" size-4 mr-2" /> MAIL A LETTER
                            </h4>
                            <p className="text-sm  text-gray-600 mb-6">
                                Feel free to copy and paste the example text as a guide, but using your own words will make a stronger impact.
                            </p>
                            <p className="font-extrabold ">
                                SENATOR ELIZABETH WARREN<br />
                                309 HART SENATE OFFICE BUILDING<br />
                                WASHINGTON DC 20510
                            </p>

                            <div className="flex items-center justify-between mt-3 ">
                                <div>
                                    <button className='button' >
                                        SEE EXAMPLE LETTER
                                    </button>
                                </div>

                                <button onClick={() => (setEmail(!email))} className='button bg-green-200 border-green-400' >
                                    {!email ? 'EMAIL' : 'Warren@gmail.com'}
                                </button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-extrabold flex items-center mb-2">
                                <Globe className=" size-4 mr-2" />VISIT THEIR WEBSITE
                            </h4>

                            <p className="text-sm mb-3  text-gray-600">
                                Visit your official's website and find their contact form, email or phone number. Feel free to use the example text as a guide, but adding your own words will make a stronger impact.
                            </p>
                            <div className="space-x-2 mt-3 ">
                                <button className='button' >
                                    GO TO WEBSITE
                                </button>
                                <button className='button' >
                                    SEE EXAMPLE TEXT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout