import { Mail, Globe } from 'lucide-react'
import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState(false)
  const [endorsed, setEndorsed] = useState(false)

  return (
    <div className='md:w-9/12 px-4 mx-auto  md:py-12 py-4'>
      <div className=' space-x-3 mb-6'>
        <button className={`${!endorsed && 'bg-black text-white'}`} onClick={() => setEndorsed(false)} >
          ENDORSED
        </button>
        <button className={`${endorsed && 'bg-black text-white'}`} onClick={() => setEndorsed(true)} >
          NOT ENDORSED
        </button>
      </div>

      <div className="grid md:grid-cols-2 md:gap-28 gap-16">
        <div>
          {!endorsed ?
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
            <img
              src="https://s3-alpha-sig.figma.com/img/3ca2/5461/e154bcf13de126453a0d6d2f2ea101e0?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZCsAmikCoG1sHVHvVbcWscRGYhCJGuEgInOy3vg-nZHsS04BFf3cRca68Vbnv~c~nVtndWV89rWtuiT2kFlNzhElTqaG4apCHUP79U-6~RqO5R9NweeW1WUYFZ0cBLLM9o7~SxQv5IeRgQEV8siQTIeA3fixy6B-lNQ5TUSkbY4a2kmtPi~eGgFlMal479tKsY~wX9ml-~1pMwVCfXEI~jCYdNl5qIFUgvrceDQ44rJ3Rz-66Lxq7MX6pP6Ud3eUmaLz6dVoZrriTnmOETBxU~yJqK65q-mBePu3PuDuZ9tkVsI4oXZBDMyRql0xtY11qI1kMBWeZ~HLBUT0RVj3Ug__"
              alt="Elizabeth Warren"
              width={100}
              height={100}
              className=" "
            />
            <div className='text-center'>
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
          {endorsed ?
            <div >
              <h3 className="font-extrabold mb-2 uppercase">Should we endorse this elected official?</h3>
              <form action="" className=' space-y-3'>
                <div>

                  <label htmlFor="" className=' text-sm text-gray-600'>Your name (optional)</label>
                  <input type="text" required className=' w-full border-2  border-black/30 p-1' />
                </div>
                <div>

                  <label htmlFor="" className=' text-sm text-gray-600'>Your email (optional)</label>
                  <input type="email" required className=' w-full border-2  border-black/30 p-1' />
                </div>
                <textarea name="tell us" required cols={30} placeholder='Tell us why.' rows={10} className=' w-full border-2 p-1 border-black/30 ' id="" />
                <div className='flex-row-reverse flex'>
                  <button type='submit'>SEND</button>
                </div>
              </form>
            </div>
            :

            <div >
              <h3 className="font-extrabold mb-2">REASON FOR ENDORSEMENT</h3>
              <ul className="list-disc  text-sm  text-gray-600 pl-5 space-y-2">
                <li>Supports emergency listing to restore gray wolf federal protections under the Endangered Species Act (Senate letter dated October 28, 2021).</li>
                <li>Supports emergency listing to restore gray wolf federal protections under the Endangered Species Act (Senate letter dated October 28, 2021).</li>
                <li>Supports emergency listing to restore gray wolf federal protections under the Endangered Species Act (Senate letter dated October 28, 2021).</li>
                <li>Supports emergency listing to restore gray wolf federal protections under the Endangered Species Act (Senate letter dated October 28, 2021).</li>
              </ul>
            </div>

          }

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
                  <button >
                    SEE EXAMPLE LETTER
                  </button>
                </div>

                <button onClick={() => (setEmail(!email))} className=' bg-green-300 border-green-500' >
                  {email ? 'EMAIL' : 'Warren@gmail.com'}
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-extrabold flex items-center mb-2">
                <Globe className=" size-4 mr-2" />VISIT THEIR WEBSITE
              </h4>

              <p className="text-sm mb-2  text-gray-600">
                Visit your official's website and find their contact form, email or phone number. Feel free to use the example text as a guide, but adding your own words will make a stronger impact.
              </p>
              <div className="space-x-2 mt-3 ">
                <button >
                  GO TO WEBSITE
                </button>
                <button >
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
