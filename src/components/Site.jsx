import React from "react"; // React 라이브러리를 가져옵니다.

// 사이트 정보를 저장한 배열입니다. 각 객체는 하나의 사이트 프로젝트를 나타내며, 텍스트, 제목, 코드 링크, 보기 링크, 그리고 추가 정보를 포함합니다.
const siteText = [
    {
        text: ["Community", "CrowdFunding", "WebSite"], // 사이트 설명의 세 부분을 배열로 나눠서 저장합니다.
        title: "커뮤니티 중심 크라우드 펀딩 사이트", // 프로젝트의 제목입니다.
        code: "https://github.com/ParkYeseulzz/JavachipPrjt_01", // 코드 저장소 링크입니다.
        view: "https://parkyeseul.tistory.com/46", // 사이트 실시간 보기 링크입니다.
        info: [
            "site coding", // 프로젝트 정보
            "production period : 2024/08/14 - 2024/08/29", // 제작 기간
            "use stack : HTML5, CSS, react, javascript, java, node.js, oracle, DBeaver, ApacheTomcat", // 사용 기술 스택
        ],
    },
    {
        text: ["Public DATA", "Travel Places and Travel Records", "Sharing Community Service"],
        title: "공공데이터 활용 여행지 추천 및 여행 기록 공유 커뮤니티 서비스",
        code: "https://github.com/ParkYeseulzz/BBOL_BBOL_BBOL.git",
        view: "https://parkyeseul.tistory.com/47",
        info: [
            "site coding",
            "production period : 2024/10/07 - 2024/11/05",
            "use stack : HTML5, CSS, jsp, javascript, java, Ajax, jquery, Spring, DBeaver, mysql, ApacheTomcat",
        ],
    },
    {
        text: ["Gas station/electric vehicle charging station", "information site", "and navigation site"],
        title: "주유소/전기차 충전소 정보 제공 및 현재 위치 기준 목적지 추천 시스템",
        code: "https://github.com/ParkYeseulzz/CARPLANET",
        view: "https://port2023-vue.netlify.app",
        info: [
            "site coding",
            "production period : 2024/11/04 - 2024/12/09",
            "use stack : HTML5, CSS, jsp, javascript, java, jpa, Ajax, jquery, Spring, DBeaver, mysql, ApacheTomcat",
        ],
    },
    {
        text: ["make", "site compliant with", "react"],
        title: "리액트를 통해 포트폴리오 생성",
        code: "https://github.com/webstoryboy/port2023-next",
        view: "https://port2023-next.netlify.app",
        info: [
            "site coding",
            "production period : two days",
            "use stack : HTML5/CSS3, Scss Variable, next.js, react",
        ],
    },
];

// Site 컴포넌트는 'Site coding' 섹션을 렌더링합니다.
const Site = () => {
    return (
        // 섹션 요소로, 이 부분이 사이트의 작업물을 소개하는 섹션입니다.
        <section id="site">
            <div className="site__inner"> {/* 섹션 내부 컨텐츠를 감싸는 div입니다. */}
                
                {/* 섹션의 제목을 정의합니다. */}
                <h2 className="site__title">
                    Site coding <em>프로젝트</em>
                </h2>

                {/* 사이트 항목들을 나열하는 div입니다. */}
                <div className="site__wrap">
                    {/* siteText 배열의 각 항목을 map 메서드를 사용해 렌더링합니다. */}
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key + 1}`} key={key}>
                            {/* 프로젝트 번호를 표시합니다. key + 1을 사용하여 번호가 1부터 시작하도록 설정합니다. */}
                            <span className="num">{key + 1}.</span>

                            {/* 사이트 설명 텍스트를 각각의 div로 나누어 출력합니다. */}
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>

                            {/* 프로젝트 제목을 출력합니다. */}
                            <h3 className="title">
                                {site.title}
                            </h3>

                            {/* 코드 및 보기 링크를 포함하는 버튼 영역입니다. */}
                            <div className="btn">
                                {/* 코드 저장소 링크 */}
                                <a href={site.code}>code</a>
                                {/* 실시간 보기 링크 */}
                                <a href={site.view}>view</a>
                            </div>

                            {/* 프로젝트 정보(코딩 유형, 제작 기간, 사용 기술 스택)를 출력합니다. */}
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Site; // Site 컴포넌트를 모듈로 내보냅니다.
