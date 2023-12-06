import React from 'react'
import {footerText} from '../constants/index.js'

const Footer = () => {
    return (
        <footer id='footer' role='contentinfo'>
            <div className='footer_inner'>
                <div className='footer_text'>
                    <span>LeeSeungNam</span>
                    <span>© webs</span>
                </div>
                <div className='footer_info'>
                    <div className='left'>
                        <div className='title'>
                            <a href="/">sign up</a>
                        </div>
                        <p>회원가입을 하시면 댓글과 게시판 기능을 이용하실 수 있습니다.</p>
                    </div>
                    <div className='right'>
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
            </div>
        </footer>
    )
}

export default Footer