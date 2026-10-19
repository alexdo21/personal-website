import { MixTechLogo, SciPySuiteLogo, StocktrackerLogo, HanVietDictionaryLogo } from "../assets";
import { MixTechMD, SciPySuiteMD, StocktrackerMD, HanVietDictionaryMD } from "../assets";

const projects = [
    {
        logo: MixTechLogo,
        logoAttribution: "https://www.flaticon.com/free-icons/audio",
        title: "MixTech",
        description: "A web application to help DJs and Musicians mix and find similar songs by interfacing directly with Spotify’s metadata on audio features.",
        pathName: "mixtech",
        content: MixTechMD,
    },
    {
        logo: SciPySuiteLogo,
        logoAttribution: "https://commons.wikimedia.org/wiki/File:Greek_lc_delta.svg",
        title: "SciPy Suite",
        description: "Mobile (SciPy Mobile) and web (SciPy Web) applications giving users direct access to SciPy's scientific computing functionalities.",
        pathName: "scipysuite",
        content: SciPySuiteMD,
    },
    {
        logo: StocktrackerLogo,
        logoAttribution: "https://www.flaticon.com/free-icons/stock-market",
        title: "Stocktracker",
        description: "A mobile application that tracks user favorited stock tickers from Alpha Vantage API.",
        pathName: "stocktracker",
        content: StocktrackerMD,
    },
    {
        logo: HanVietDictionaryLogo,
        logoAttribution: "",
        title: "HanViet Dictionary",
        description: "A lookup tool for Vietnamese readings of Chinese characters.",
        pathName: "hanvietdictionary",
        content: HanVietDictionaryMD,
    }
]

export { projects };
