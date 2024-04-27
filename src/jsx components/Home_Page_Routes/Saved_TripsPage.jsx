import Return_Arrow from '../Navigations/Return_Arrow';
import Footer_nav from '../Navigations/Footer_nav';

const Saved_TripsPage = () => {
  const box_model = ["", "", "", "", "", "",];

  return (
    <section className='relative flex flex-col justify-center items-center h-full w-full'>
      <div className='w-full lg:w-[1000px]'>
        <Return_Arrow />
        {/* <div className='grid grid-cols-1 justify-center items-center gap-[15px] w-full h-full pt-[90px] px-[20px] sm:grid-cols-2'>
          {box_model.map((item, index) => (
            <div key={index} className='flex flex-col gap-3 justify-center items-center rounded-[10px] py-[18px] px-[24px] bg-secondary box_size_1'>{item}
              <div className=' box_size_2 bg-highlight_purple rounded-[10px]' />
              <div className='flex flex-col gap-3 w-full'>
                <div className='flex justify-between'>
                  <span className='w-[150px] h-[15px] bg-highlight_purple' />
                  <span className='w-[30px] h-[15px] bg-highlight_purple' />
                </div>
                <span className='w-[150px] h-[15px] bg-highlight_purple' />
                <span className='w-[150px] h-[15px] bg-highlight_purple' />
              </div>
            </div>
          ))}
        </div> */}
        <div className='w-full lg:w-[1000px]'>
          <Footer_nav />
        </div>
      </div>
    </section>
  )
}

export default Saved_TripsPage;