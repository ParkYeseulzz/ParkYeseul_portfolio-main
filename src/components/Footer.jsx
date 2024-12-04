import React from "react";


const footerText = [
 
    {
        title: "박예슬의 github",
        desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/ParkYeseulzz",
    },
    {
        title: "박예슬의 Tstory",
        desc: "블로그에 오시면 더 많은 정보를 볼 수 있습니다.",
        link: "https://parkyeseul.tistory.com/",
    },
    
];




const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>webstoryboy</span>
                    <span>© webs</span>
                </div>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">Park Yeseul</a>
                        </div>
                        <p>포트폴리오 봐주셔서 감사드립니다. 😀</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key)=>(
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    © 2024 ParkYeseul's portfolio<br />
                    이 사이트는 리액트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    );
};

export default Footer;