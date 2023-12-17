import Spinner from 'react-spinner-material';

const Loading = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <Spinner style={{height: "70px", width: "70px"}} radius={120} color={"#333"} stroke={1} visible={true} />
        </div>
    )
}

export default Loading