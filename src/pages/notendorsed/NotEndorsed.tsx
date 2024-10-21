import Layout from "../../components/Layout"

export const NotEndorsed = () => {
    return (
        <Layout>
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
                        <button className='button' type='submit'>SEND</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
