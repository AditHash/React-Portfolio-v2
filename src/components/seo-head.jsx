import { Helmet } from "react-helmet";

const SITE_URL = "https://adithash.github.io";

const SEOHead = ({ title, description, keywords = [], path = "/" }) => {
    const canonical = `${SITE_URL}${path}`;
    const ogImage  = `${SITE_URL}/image2.jpg`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords"    content={keywords.join(", ")} />
            <link rel="canonical"    href={canonical} />
            <meta name="author"      content="Aditya Dey" />
            <meta name="robots"      content="index, follow" />

            {/* Open Graph */}
            <meta property="og:type"        content="website" />
            <meta property="og:site_name"   content="Aditya Dey — Portfolio" />
            <meta property="og:title"       content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url"         content={canonical} />
            <meta property="og:image"       content={ogImage} />

            {/* Twitter Card */}
            <meta name="twitter:card"        content="summary_large_image" />
            <meta name="twitter:site"        content="@AdityaDey442997" />
            <meta name="twitter:creator"     content="@AdityaDey442997" />
            <meta name="twitter:title"       content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image"       content={ogImage} />
        </Helmet>
    );
};

export default SEOHead;
