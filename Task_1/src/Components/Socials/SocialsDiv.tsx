import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from 'react-icons/bs';
const SocialsDiv = () => {
  return (
    <div className="flex gap-3 my-3 text-2xl ml-1">
      <a target="_blank" href="https://www.linkedin.com/in/gauravdeshmukh01/">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/gauravdeshmukh01">
        <BsGithub />
      </a>
      {/* <a target="_blank" href="https://www.facebook.com/LetodianiRoma/">
        <BsFacebook />
      </a> */}
      <a target="_blank" href="https://www.instagram.com/itz_garry_deshmukh_01">
        <BsInstagram />
      </a>
      {/* <a target="_blank" href="https://twitter.com/l3todianiroma">
        <BsTwitter />
      </a> */}
    </div>
  );
};

export default SocialsDiv;
