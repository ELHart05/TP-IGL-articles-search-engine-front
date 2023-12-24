import Layout from '../../components/Layout';
import './profileInfo.css'
const ProfileInfo = ({ }) => {
let name;
let familyName;
let email;

// informations.map(informations => (
// name=informations.name,
// familyName=informations.familyName,
// email=informations.email
// ))
return (
  <Layout isLoading={false}>  
    <div>
      <div id="no-phone" className="p-6 pt-8 pb-8 m-20 hidden sm:block">
        <p
          className="bg-white rounded shadow-md p-8 text-black  font-roboto text-custom-40 font-semibold md:text-3xl lg:text-4xl xl:text-5xl">
          welcome <span
            className="text-[#800020] font-roboto text-custom-40 font-semibold md:text-3xl lg:text-4xl xl:text-5xl">walidbouben</span>
          to your profile</p>
        <div>
          <div class="relative bg-white w-full z-0 h-custom-100 md:h-20 lg:h-28 xl:h-36">

          </div>
          <div className="profile ">
            <img className="image-profile md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-44 xl:w-44"
              src='http://127.0.0.1:8081/photos/reactimage.png' alt=' profile'></img>
            <button className="myButton md:h-10 md:w-10 lg:h-11 lg:w-11 xl:w-14 xl:h-14" onClick="alert('Button Clicked!')">
            </button>
            <p className="full-name md:text-3xl lg:text-4xl lg:mb-20 lg:mt-6 xl:mb-24 xl:mt-10">qsqs</p>
            <div className="informations ">
              <pre
                className="information md:text-2xl md:my-11 lg:my-16 lg:text-3xl ">Full name       qsqs<button className="editButton md:h-6 md:w-6 lg:h-8 lg:w-8" onClick="alert('Button Clicked!')"></button></pre>

              <pre className="information md:text-2xl lg:my-16 lg:text-3xl">Gmail              qsqs   </pre>
              <pre
                className="information md:text-2xl lg:my-16 lg:text-3xl">Password      <button className="infoButton md:text-2xl ">change Password</button></pre>
              <pre
                className="information md:text-2xl lg:my-16 lg:text-3xl">Articles   <button className="infoButton md:text-2xl">check Articles</button></pre>
            </div>
            <button className="logOut">Log out</button>
          </div>

        </div>

      </div>



      <div id="phone" className="p-2 pt-8 pb-8 m-8  sm:hidden">
        <p className="bg-white rounded  p-6 text-black  font-roboto text-base font-semibold "> welcome <span
            className="text-[#800020] font-roboto text-base font-semibold ">walidbouben</span> to your profile</p>
        <img className="relative w-28 h-28 block mx-auto rounded-full " src='http://127.0.0.1:8081/photos/reactimage.png'
          alt=' profile'></img>
        <button className="backgroundCustom w-8 h-8 bg-contain buttonPosition relative left-1/2"
          onClick="alert('Button Clicked!')"></button>
        <div className="pt-6 ">
          <pre
            className="informationPhone ">Full name     {name} {familyName}<button className="editButton md:h-6 md:w-6 lg:h-8 lg:w-8" onClick="alert('Button Clicked!')"></button></pre>

          <pre className="informationPhone ">Gmail            {email}    </pre>
          <pre className="informationPhone ">Password    <button className="infoButton  ">change Password</button></pre>
          <pre className="informationPhone ">Articles <button className="infoButton ">check Articles</button></pre>
        </div>
        <button className="logOutPhone">Log out</button>
      </div>
    </div>
  </Layout>
);
}

export default ProfileInfo;