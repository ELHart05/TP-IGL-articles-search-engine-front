import isValidUser from "../../utils/isValidUser"

const WelcomeUser = () => {
    const { user } = isValidUser();
    return (
        <>
            Welcome <span className='text-Pred'>{user?.username}</span>
        </>
    )
}

export default WelcomeUser