/* -----> Custom Hooks <----- */
import MemeCard from '../Components/MemeCard';
import useMemesData from '../Hooks/useMemesData';
import MemeCardShimmer from '../ShimmerUI/MemeCardShimmer';

/* -----> Component <----- */
const Home = () => {
    // Hooks
    const memesList = useMemesData();
    // console.log(memesList);

    // Return JSX
    return (
        <div className='flex flex-wrap'>
            {
                memesList ?
                    memesList.map((memeData, index) => <MemeCard key={index} memeData={memeData} />)
                    :
                    [1,2,3,4,5].map((index) => <MemeCardShimmer key={index}/>)
            }
        </div>
    );
};

/* -----> Export <----- */
export default Home;
