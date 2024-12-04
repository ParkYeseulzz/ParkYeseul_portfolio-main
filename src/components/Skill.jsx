import React from "react";

const skillText = [
    {
        title: "Education",
        desc: `
            👩‍💻 자바(JAVA)활용 데이터 플랫폼 구축 풀스택 개발자 과정
            2024-06-17 ~ 2024-12-10 (6개월)
            자바 기본 문법, 프론트 엔드 개발, React와 반응형 UI,
            백 엔드 개발Ⅰ,Ⅱ,Ⅲ, 공공데이터 활용, 클라우드 서버의 교육과정을 거쳤습니다.
        `,
    },
    {
        title: "SKills",
        desc: `
            [java] 자바 문법, JDBC 및 데이터베이스 연동
            [JSP]  Bean, Get/Set메소드로 DB 연동 및 입출력
            [JavaScript] 자바스크립트 기본 문법, JQuery 및 AJax 문법
            [DBMS] Oracle, MySQL/DB 설치 및 기본 SQL 작성
            [Framework]Spring Boot, MVC, 어노테이션 기반 Controller
        `,
    },
    {
        title: "Certification",
        desc: "정보처리산업기사, SQLD, 컴퓨터활용능력2급, MOS Excel, Mos Powerpoint",
    },
];

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">About</h2>

                <div className="skill__desc">
                    {/* skillText 배열을 순회하면서 각 항목 렌더링 */}
                    {skillText.map((skill, key) => (
                        <div key={key} className="skill__item">
                            <span style={{ fontSize: "1.7rem", fontWeight: "bold", color: "#fffa97" }}>
                                {key + 1}.
                            </span>
                            <h3 style={{ fontSize: "1.9rem", fontWeight: "bold", color: "#fffa97" }}>
                                {skill.title}
                            </h3>
                            {/* 줄바꿈을 적용하여 설명 출력 */}
                            <p style={{ fontSize: "1.2rem", color: "white", lineHeight: "1.9" }}>
                                {skill.desc.split("\n").map((line, idx) => (
                                    <React.Fragment key={idx}>
                                        {line.trim()}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
