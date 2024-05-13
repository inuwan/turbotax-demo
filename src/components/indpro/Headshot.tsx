import useIndependentPro from "../../hooks/useIndependentPro";
import { Image } from "@yext/pages-components";
import OutsideCPA from "../../assets/icons/OutsideCPA";

const Headshot: React.FC = () => {
  const pro = useIndependentPro();

  if (!pro.headshot?.url) {
    return (
      <OutsideCPA
        className={
          "w-[256px] h-[256px] s:w-[300px] s:h-[300px] p-8 border-white rounded-[16px] bg-wintermint120 border-4 self-center shadow-elev1"
        }
      />
    );
  }

  const imgClass =
    "rounded-[16px] border-4 border-white bg-wintermint120 shadow-elev1 max-w-[256px] max-h-[256px] s:max-w-[300px] s:max-h-[300px] self-center bg-gray08";
  if (pro.headshot.url.includes("mktgcdn.com/")) {
    return (
      <Image
        image={pro.headshot}
        layout={"fixed"}
        width={330}
        height={330}
        loading={"eager"}
        className={imgClass}
      />
    );
  }

  return (
    <img
      alt={"Headshot of " + pro.c_taxProName}
      src={pro.headshot.url}
      width={300}
      height={300}
      loading={"eager"}
      className={"object-cover " + imgClass}
    />
  );
};

export default Headshot;
