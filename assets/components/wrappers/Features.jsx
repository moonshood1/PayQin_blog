import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import FeatureMain from "../content/FeatureMain";
import FeatureNext from "../content/FeatureNext";
import FeaturesSecond from "../content/Features";
import FeatureMainLoader from "../loaders/_FeatureMainLoader";
import FeatureOneLoader from "../loaders/_FeatureOneLoader";
import FeatureTwoLoader from "../loaders/_FeatureTwoLoader";
import { GET_THE_NEXT, GET_RELATED_TWO, GET_AFTER_MAIN } from "../../config";

const Features = () => {
  const [main, setMain] = useState([]);
  const [featuredOne, setFeaturedOne] = useState([]);
  const [featuredTwo, setFeaturedTwo] = useState([]);
  const [mainLoading, setMainLoading] = useState(true);
  const [featureOneLoading, setFeatureOneLoading] = useState(true);
  const [featureTwoLoading, setFeatureTwoLoading] = useState(true);

  useEffect(() => {
    fetch(GET_THE_NEXT)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMain(data);
        setMainLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Une erreur est survenue");
      });
    fetch(GET_RELATED_TWO)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeatureTwoLoading(false);
        setFeaturedTwo(data);
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Une erreur est survenue");
      });
    fetch(GET_AFTER_MAIN)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeaturedOne(data);
        setFeatureOneLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        toast.error("Une erreur est survenue");
      });
  }, []);
  return (
    <div className="bg-white pt-16 pb-4 ">
      <h1 className="pl-4 md:pl-44 2xl:pl-72 text-2xl sm:text-3xl font-bold text-black mb-5">
        Dans la même catégorie
      </h1>
      <div className="grid md:grid-cols-2 ">
        <div className="px-2 md:pl-44 2xl:pl-72">
          {featureOneLoading && <FeatureOneLoader />}
          {!featureOneLoading && featuredOne && (
            <FeatureNext featuredOne={featuredOne} />
          )}
          <div className="flex mt-4">
            {featureTwoLoading && <FeatureTwoLoader items={[1, 2]} />}
            {!featureTwoLoading && featuredTwo && (
              <FeaturesSecond featuredTwo={featuredTwo} />
            )}
          </div>
        </div>
        {mainLoading && <FeatureMainLoader />}
        {!mainLoading && main && <FeatureMain main={main} />}
      </div>
    </div>
  );
};

export default Features;
