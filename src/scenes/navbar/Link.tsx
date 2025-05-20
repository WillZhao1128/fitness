import AnchorLink from "react-anchor-link-smooth-scroll";
import type { Page } from "../../shared/Page";

type Props = {
    page:string;
    selectedPage: string;
    setSelectedPage: (value:Page) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const pageId:Page = page.toLowerCase().replace(/ /g, "") as Page;

  return (
    <AnchorLink
        href={`#${pageId}`}
        className={`${selectedPage == pageId? "text-red-950" : ""} transition duration-500 hover:text-red-300`}
        onClick={() => {setSelectedPage(pageId);}}
    >
        {page}
    </AnchorLink>
  )
}

export default Link