/* eslint-disable react/jsx-key */
import React from "react";
import Link from "next/link";
import getPostMetadata from "../components/getPostMetaData";
import PostPreview from "../components/PostPreview";



function HomePage() {
    const postMetaData = getPostMetadata();
    const postPreviews = postMetaData.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));

    return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>;
}

export default HomePage;

