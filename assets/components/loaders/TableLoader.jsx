import React from "react";
import ContentLoader from "react-content-loader";

const TableLoader = (props) => {
  return (
    <>
      <ContentLoader
        speed={3}
        width={1400}
        height={260}
        viewBox="0 0 1400 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        className="hidden 2xl:block"
      >
        <rect x="7" y="20" rx="0" ry="0" width="150" height="33" />
        <rect x="7" y="70" rx="0" ry="0" width="150" height="33" />
        <rect x="7" y="115" rx="0" ry="0" width="150" height="33" />
        <rect x="7" y="170" rx="0" ry="0" width="150" height="33" />
        <rect x="7" y="215" rx="0" ry="0" width="150" height="33" />

        <rect x="240" y="20" rx="0" ry="0" width="400" height="33" />
        <rect x="240" y="70" rx="0" ry="0" width="400" height="33" />
        <rect x="240" y="115" rx="0" ry="0" width="400" height="33" />
        <rect x="240" y="170" rx="0" ry="0" width="400" height="33" />
        <rect x="240" y="215" rx="0" ry="0" width="400" height="33" />

        <rect x="800" y="20" rx="0" ry="0" width="100" height="33" />
        <rect x="800" y="70" rx="0" ry="0" width="100" height="33" />
        <rect x="800" y="115" rx="0" ry="0" width="100" height="33" />
        <rect x="800" y="170" rx="0" ry="0" width="100" height="33" />
        <rect x="800" y="215" rx="0" ry="0" width="100" height="33" />

        <rect x="1035" y="20" rx="0" ry="0" width="90" height="33" />
        <rect x="1035" y="70" rx="0" ry="0" width="90" height="33" />
        <rect x="1035" y="115" rx="0" ry="0" width="90" height="33" />
        <rect x="1035" y="170" rx="0" ry="0" width="90" height="33" />
        <rect x="1035" y="215" rx="0" ry="0" width="90" height="33" />

        <rect x="1265" y="20" rx="0" ry="0" width="25" height="33" />
        <rect x="1265" y="70" rx="0" ry="0" width="25" height="33" />
        <rect x="1265" y="115" rx="0" ry="0" width="25" height="33" />
        <rect x="1265" y="170" rx="0" ry="0" width="25" height="33" />
        <rect x="1265" y="215" rx="0" ry="0" width="25" height="33" />

        <rect x="1300" y="20" rx="0" ry="0" width="25" height="33" />
        <rect x="1300" y="70" rx="0" ry="0" width="25" height="33" />
        <rect x="1300" y="115" rx="0" ry="0" width="25" height="33" />
        <rect x="1300" y="170" rx="0" ry="0" width="25" height="33" />
        <rect x="1300" y="215" rx="0" ry="0" width="25" height="33" />

        <rect x="1335" y="20" rx="0" ry="0" width="25" height="33" />
        <rect x="1335" y="70" rx="0" ry="0" width="25" height="33" />
        <rect x="1335" y="115" rx="0" ry="0" width="25" height="33" />
        <rect x="1335" y="170" rx="0" ry="0" width="25" height="33" />
        <rect x="1335" y="215" rx="0" ry="0" width="25" height="33" />
      </ContentLoader>
    </>
  );
};

export default TableLoader;
