import React, { useState } from 'react';
import './aside.css';
import { MenuStore } from '../../store/Menu';

const Aside = () => {

    const defaultMenu = {
        DashActive : false,
        EcomActive : false ,
        PageActive : false ,
        UserActive : false ,
        InvoActive : false ,
        ProjActive : false ,
        TaskActive : false ,
        CaleActive : false ,
        AuthActive : false ,
    }

    const [menuActive, setMenuActive] = useState(defaultMenu)

    const handleMenu = () => {
        MenuStore.update(s => {
            s.menu =false
        })
    }

    const menuState  = MenuStore.useState(s => s)

    
    const dashClick = () => {
        setMenuActive({
            ...defaultMenu,
            DashActive : !menuActive.DashActive
        })
    }
    const pageClick = () => {
        setMenuActive({
            ...defaultMenu,
            PageActive : !menuActive.PageActive
        })
    }
    const ecomClick = () => {
        setMenuActive({
            ...defaultMenu,
            EcomActive : !menuActive.EcomActive
        })
    }
    const userClick = () => {
        setMenuActive({
            ...defaultMenu,
            UserActive : !menuActive.UserActive
        })
    }
    const invoClick = () => {
        setMenuActive({
            ...defaultMenu,
            InvoActive : !menuActive.InvoActive
        })
    }
    const projClick = () => {
        setMenuActive({
            ...defaultMenu,
            ProjActive : !menuActive.ProjActive
        })
    }
    const taskClick = () => {
        setMenuActive({
            ...defaultMenu,
            TaskActive : !menuActive.TaskActive
        })
    }
    const caleClick = () => {
        setMenuActive({
            ...defaultMenu,
            CaleActive : !menuActive.CaleActive
        })
    }
    const authClick = () => {
        setMenuActive({
            ...defaultMenu,
            AuthActive : !menuActive.AuthActive
        })
    }

    return (     
        <aside className={menuState.menu ? 'show': 'hide'}>
            <div className='wraper'>
                <div className='burger'>
                    <img src='images/burger.svg' />
                </div>
                <div className='top'>
                    <div className='logo-container' >
                        <img src='images/logo.png' />
                        <h4>Test 3</h4>
                    </div>
                    <h1 onClick={handleMenu}>???</h1>
                </div>
                <div className='sidebar'>
                    <a href='#' className={menuActive.DashActive ? 'active' : ''} onClick={dashClick}>
                        <div className='left'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.24487 14.781L10.238 10.8909L13.6522 13.5728L16.5813 9.79248" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="19.9954" cy="4.20003" r="1.9222" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.9245 3.12012H7.65679C4.64535 3.12012 2.77808 5.25284 2.77808 8.26428V16.3467C2.77808 19.3581 4.60874 21.4817 7.65679 21.4817H16.2609C19.2724 21.4817 21.1396 19.3581 21.1396 16.3467V9.30776" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <h5>Dashboard</h5>
                        </div>
                        <img src='images/Action Icon.png' />
                    </a>
                    <a href='#' className={menuActive.EcomActive ? 'active' : ''} onClick={ecomClick}>
                        <div className='left'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0136 21.9998H8.66579C5.59943 21.9998 3.24703 20.8922 3.91522 16.4346L4.69325 10.3934C5.10515 8.16913 6.52392 7.31787 7.76877 7.31787H17.9473C19.2104 7.31787 20.5468 8.2332 21.0228 10.3934L21.8008 16.4346C22.3683 20.3888 20.08 21.9998 17.0136 21.9998Z" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.151 7.09824C17.151 4.71216 15.2167 2.77787 12.8306 2.77787V2.77787C11.6816 2.773 10.578 3.22603 9.76381 4.03679C8.94963 4.84754 8.49193 5.94923 8.49194 7.09824V7.09824" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.7962 11.6017H15.7505" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.96566 11.6017H9.91989" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <h5>E-commerce</h5>
                        </div>
                        <img src='images/Action Icon2.png' />
                    </a>
                    <a href='#' className={menuActive.PageActive ? 'active' : ''} onClick={pageClick}>
                        <div className='left'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.37145 10.2017V17.0618" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.0382 6.91895V17.0617" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.6285 13.8267V17.0617" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <h5>Pages</h5>
                        </div>
                        <img src='images/Action Icon.png' />
                    </a>
                    <a href='#' className={menuActive.UserActive ? 'active' : ''} onClick={userClick}>
                        <div className='left'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M8.27002 14.9519L9.8627 9.8627L14.9519 8.27002L13.3593 13.3593L8.27002 14.9519Z" stroke="#081735" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle opacity="0.4" cx="11.611" cy="11.611" r="9.61098" stroke="#081735" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <h5>Users</h5>
                        </div>
                    </a>
                    <a href='#' className={menuActive.InvoActive ? 'active' : ''} onClick={invoClick}>
                        <div className='left'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6389 14.3957H17.5906C16.1042 14.3948 14.8993 13.1909 14.8984 11.7045C14.8984 10.218 16.1042 9.01409 17.5906 9.01318H21.6389" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.0485 11.6427H17.7369" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.03564 7.5382H12.4346" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <h5>Invoices</h5>
                        </div>
                        <img src='images/Action Icon.png' />
                    </a>
                    <a href='#' className={menuActive.ProjActive ? 'active' : ''} onClick={projClick}>
                        <div className='left'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7161 16.2236H8.49609" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.7161 12.0371H8.49609" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.2511 7.86035H8.49609" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9085 2.75C15.9085 2.75 8.23149 2.754 8.21949 2.754C5.45949 2.771 3.75049 4.587 3.75049 7.357V16.553C3.75049 19.337 5.47249 21.16 8.25649 21.16C8.25649 21.16 15.9325 21.157 15.9455 21.157C18.7055 21.14 20.4155 19.323 20.4155 16.553V7.357C20.4155 4.573 18.6925 2.75 15.9085 2.75Z" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
   
                            <h5>Projects</h5>
                        </div>
                        <img src='images/Action Icon.png' />
                    </a>
                    <a href='#' className={menuActive.TaskActive ? 'active' : ''} onClick={taskClick}>
                        <div className='left'>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9756 0.000488281C11.0185 0.000488281 11.0606 0.00410441 11.1016 0.0110486L11.2385 0.0118883C11.4425 0.0118883 11.6375 0.0948883 11.7795 0.241888L16.8445 5.51889C16.9785 5.65789 17.0536 5.84489 17.0536 6.03789V15.2039C17.0715 17.7129 15.1175 19.7629 12.6045 19.8649L4.58546 19.8659H4.47646C2.02652 19.8105 0.0616273 17.8291 0.00176667 15.4031L0.00146484 4.49089C0.0594648 2.00989 2.10846 0.0118883 4.57147 0.0118883L10.8495 0.0110486C10.8905 0.00410441 10.9326 0.000488281 10.9756 0.000488281ZM10.2255 1.51149L4.57346 1.51189C2.91646 1.51189 1.54046 2.85389 1.50146 4.50889V15.2039C1.46446 16.9169 2.81446 18.3279 4.51046 18.3659H12.5745C14.2435 18.2969 15.5655 16.9099 15.5535 15.2099L15.5535 6.98349L13.5436 6.98449C11.7136 6.97949 10.2256 5.48749 10.2256 3.65949L10.2255 1.51149ZM10.7888 12.6086C11.2028 12.6086 11.5388 12.9446 11.5388 13.3586C11.5388 13.7726 11.2028 14.1086 10.7888 14.1086H5.38876C4.97476 14.1086 4.63876 13.7726 4.63876 13.3586C4.63876 12.9446 4.97476 12.6086 5.38876 12.6086H10.7888ZM8.74387 8.85659C9.15787 8.85659 9.49387 9.19259 9.49387 9.60659C9.49387 10.0206 9.15787 10.3566 8.74387 10.3566H5.38787C4.97387 10.3566 4.63787 10.0206 4.63787 9.60659C4.63787 9.19259 4.97387 8.85659 5.38787 8.85659H8.74387ZM11.7255 2.35249L11.7256 3.65949C11.7256 4.66349 12.5426 5.48149 13.5456 5.48449L14.7315 5.48349L11.7255 2.35249Z" fill="#8F95B2"/>
                        </svg>

                            <h5>Tasks</h5>
                        </div>
                        <img src='images/Action Icon.png' />
                    </a>
                    <a href='#' className={menuActive.CaleActive ? 'active' : ''} onClick={caleClick}>
                        <div className='left'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.37145 10.2017V17.0618" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.0382 6.91895V17.0617" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.6285 13.8267V17.0617" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" stroke="#8F95B2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h5>Calendar</h5>
                        </div>
                    </a>
                    <a href='#' className={menuActive.AuthActive ? 'active' : ''} onClick={authClick}>
                        <div className='left'>
                            <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.3749 0.00176677C11.2949 0.00176677 13.6729 2.37977 13.6729 5.30277L13.6728 6.87937C15.448 7.49718 16.725 9.18718 16.725 11.1706V15.4596C16.725 17.9646 14.688 20.0016 12.183 20.0016H4.542C2.037 20.0016 0 17.9646 0 15.4596V11.1706C0 9.18755 1.27652 7.49782 3.05121 6.87972L3.0519 5.30277C3.0579 3.86277 3.6149 2.53377 4.6199 1.53777C5.6259 0.540767 6.9539 -0.0362332 8.3749 0.00176677ZM12.183 8.12857H4.542C2.864 8.12857 1.5 9.49257 1.5 11.1706V15.4596C1.5 17.1376 2.864 18.5016 4.542 18.5016H12.183C13.86 18.5016 15.225 17.1376 15.225 15.4596V11.1706C15.225 9.49257 13.86 8.12857 12.183 8.12857ZM8.3623 11.4544C8.7763 11.4544 9.1123 11.7904 9.1123 12.2044V14.4254C9.1123 14.8394 8.7763 15.1754 8.3623 15.1754C7.9483 15.1754 7.6123 14.8394 7.6123 14.4254V12.2044C7.6123 11.7904 7.9483 11.4544 8.3623 11.4544ZM8.3719 1.50177H8.3559C7.3429 1.50177 6.3939 1.89177 5.6769 2.60277C4.9549 3.31677 4.5559 4.26977 4.5519 5.28577L4.551 6.628H12.172L12.1729 5.30277C12.1729 3.20677 10.4679 1.50177 8.3719 1.50177Z" fill="#8F95B2"/>
                            </svg>
                            <h5>Authentication</h5>
                        </div>
                        <img src='images/Action Icon.png' />
                    </a>
                </div>
                <div className='get-pro'>
                    <div className='title'>
                        <p>Upgrade to PRO toget acess to all features</p>
                    </div>
                    <a href='#'>
                        <p>Get PRO Now</p>
                    </a>
                </div>
            </div>
            <div className='bottom'>
                <div className='user'>
                    <img src="images/Avatar.png" className='avatar' />
                    <div className='user-details'>
                        <h6>Jane Eyre</h6>
                        <p>UX Designer</p>
                    </div>
                </div>
                <img src='images/list.png' className='list' />
            </div>
        </aside>
    )
};

export default Aside;
