import React from "react";
import Home from "../Home/Home";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import Statistics from "../Statistics/Statistics";
import classes from "../../css/Main.module.css";
import { Routes, Route } from "react-router-dom";
import About from "../About";
import BlogList from "../Blog/BlogList";
import Blog1 from "../Blog/Blog1";
import Blog2 from "../Blog/Blog2";
import Partner from "../Partner/Partner";
import Study from "../Study/Study";
import OnlineSchools from "../OnlineSchools/OnlineSchools";
import Vacancies from "../Vacancies/Vacancies";
import Forsellers from "../Forsellers/Forsellers";
import Forclients from "../Forclients/Forclients";
import Sales from "../Sales/Sales";
import Blog3 from "../Blog/Blog3";
import UsersContainer from "../Users/UsersContainer";
import RegistrationsContainer from "../Auth/Registration/RegistrationsContainer";
import LoginsContainer from "../Auth/Login/LoginsContainer";
import { useSelector } from "react-redux";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
const DialogsContainer = React.lazy(() => import('../Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('../Profile/ProfileContainer'));


const Main = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <div className={classes.main}>
            <aside className={classes.sidebar}>
                <SidebarMenu dispatch={props.dispatch} />
            </aside>
            <section className={classes.content}>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/2" element={<Blog2 />} />
                    <Route path="/blog/1" element={<Blog1 />} />
                    <Route path="/blog/3" element={<Blog3 />} />
                    <Route path="/partner" element={<Partner />} />
                    <Route path="/study" element={<Study />} />
                    <Route path="/onlineschools" element={<OnlineSchools />} />
                    <Route path="/vacancies" element={<Vacancies />} />
                    <Route path="/forsellers" element={<Forsellers />} />
                    <Route path="/forclients" element={<Forclients />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/users" element={<UsersContainer />} />
                    <Route path="/dialogs" element={(
                        <React.Suspense fallback={<div>Загрузка...</div>}>
                            <DialogsContainer />
                        </React.Suspense>
                    )} />
                    <Route path="/profile/:id?" element={(
                        <React.Suspense fallback={<div>Загрузка...</div>}>
                            <ProfileContainer />
                        </React.Suspense>
                    )} />

                    {!isAuth &&
                        <>
                            <Route path="/registration" element={<RegistrationsContainer />} />
                            <Route path="/login" element={<LoginsContainer />} />
                        </>
                    }
                </Routes>
            </section>
        </div>
    )
}

export default Main;